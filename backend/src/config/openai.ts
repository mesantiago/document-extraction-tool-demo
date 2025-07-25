import { ChatCompletionTool, ChatCompletionToolChoiceOption } from "openai/resources/chat";

interface Config {
    apiKey: string;
    systemPrompt: string;
    tool_choice: ChatCompletionToolChoiceOption;
    tools: Array<ChatCompletionTool>;
}

const config: Config = {
    apiKey: process.env.OPENAI_API_KEY || '',
    systemPrompt: 'The user have a long text extracted from a pdf file, and you want to give extracted structured watershed implementation data report',
    tool_choice: { 
        type: "function", 
        function: { 
          name: "extract_report" 
        }
    },
    tools: [
        {
            type: "function",
            function: {
                name: "extract_report",
                description: "Extracts structured watershed implementation data from a provided report text.",
                parameters: {
                    type: "object",
                    properties: {
                        overview: {
                            type: "string",
                            description: "A section that orients the reader and sets the stage for a more detailed discussion in the document."
                        },
                        summary: {
                            type: "object",
                            description: "Overall metrics summarizing the watershed project.",
                            properties: {
                                totalGoals: {
                                    type: "number",
                                    description: "The total number of project goals or milestones defined in the watershed plan."
                                },
                                totalBMPs: {
                                    type: "number",
                                    description: "The total number of Best Management Practices (BMPs) activity mentioned in the plan."
                                },
                                completionRate: {
                                    type: "number",
                                    description: "Estimated percentage of the project goals or activities completed so far (0–100)."
                                }
                            },
                            required: ["totalGoals", "totalBMPs", "completionRate"]
                        },
                        goals: {
                            type: "array",
                            description: "From the milestones section of the document; the list of milestone and their outcomes outlined in the watershed plan.",
                            items: {
                                type: "object",
                                properties: {
                                    description: {
                                        type: "string",
                                        description: "A short description or title of the project milestone or goal."
                                    },
                                    expectedOutcome: {
                                        type: "string",
                                        description: "If mentioned in the document - the intended or measurable outcome associated with this goal, such as water quality improvement or BMP implementation."
                                    },
                                    planTimelineSchedule: {
                                        type: "array",
                                        description: "The planned/expected duration in months the goal should take place in the timeline, start month and end month, defaults to 0 if cannot be identified",
                                        items: {
                                            type: "integer"
                                        }
                                    }
                                },
                                required: ["description"]
                            }
                        },
                        bmps: {
                            type: "array",
                            description: "A list of Best Management Practices (BMPs) activities planned or implemented in the watershed and their estimated budget.",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name or type of the BMP, such as 'cover crop' or 'streambank protection'."
                                    },
                                    unit: {
                                        type: "string",
                                        description: "The unit of measurement for the BMP (e.g., ac, ft, cu yd, ea)."
                                    },
                                    unitCount: {
                                        type: "number",
                                        description: "The number of units planned or implemented for this BMP."
                                    },
                                    unitCost: {
                                        type: "number",
                                        description: "The cost per unit of the BMP."
                                    },
                                    totalCost: {
                                        type: "number",
                                        description: "The total estimated or actual cost for this BMP."
                                    }
                                },
                                required: ["name"]
                            }
                        },
                        implementation: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    activity: {
                                        description: "The name of the implementation activity",
                                        type: "string"
                                    },
                                    timeline: {
                                        type: "array",
                                        description: "The planned/expected duration the implementation activity should take place in the timeline, start month and end month, defaults to 0 if cannot be identified",
                                        items: {
                                            type: "integer"
                                        }
                                    }
                                },
                                required: ["activity"]
                            }
                        },
                        monitoring: {
                            type: "array",
                            description: "List of water quality parameters that are monitored to assess watershed health and BMP effectiveness.",
                            items: {
                                type: "object",
                                properties: {
                                    parameter: {
                                        type: "string",
                                        description: "The name of the water quality parameter being monitored (e.g., 'Dissolved Oxygen', 'Total Suspended Solids')."
                                    },
                                    threshold: {
                                        type: "string",
                                        description: "The numeric or descriptive threshold value used to assess compliance or impairment (e.g., '≥ 5.0 mg/L')."
                                    },
                                    notes: {
                                        type: "string",
                                        description: "Additional context, interpretation, or details about how the parameter is used or why it’s important."
                                    }
                                },
                                required: ["parameter"]
                            }
                        },
                        outreach: {
                            type: "array",
                            description: "List of outreach and public engagement activities conducted as part of the watershed plan.",
                            items: {
                                type: "object",
                                properties: {
                                activity: {
                                    type: "string",
                                    description: "The name or type of outreach activity (e.g., 'Public Meeting', 'BMP Workshop', 'Flyer Distribution')."
                                },
                                audience: {
                                    type: "string",
                                    description: "The intended audience of the activity (e.g., 'Farmers', 'General Public', 'School Children')."
                                },
                                deliveryMethod: {
                                    type: "string",
                                    description: "How the outreach was delivered (e.g., 'In-person', 'Online', 'Social Media')."
                                }
                                },
                                required: ["activity"]
                            }
                        },
                        geographicAreas: {
                            type: "array",
                            description: "List of named geographic areas discussed in the report.",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The full name of the geographic area (e.g., 'Lower Fox River Subwatershed')."
                                    },
                                    type: {
                                        type: "string",
                                        description: "The classification or type of region (e.g., 'Subwatershed', 'HUC-12', 'County')."
                                    },
                                    priorityLevel: {
                                        type: "string",
                                        description: "The assigned priority of the area if available (e.g., 'High')."
                                    },
                                    notes: {
                                        type: "string",
                                        description: "Additional comments, context, or attributes of the area."
                                    }
                                },
                                required: ["name"]
                            }
                        }
                    },
                    "required": ["summary", "goals", "bmps", "implementation", "monitoring", "outreach", "geographicAreas"]
                }
            }
        }
    ]
};

export default config;
