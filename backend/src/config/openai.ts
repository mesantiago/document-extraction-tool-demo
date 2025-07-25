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
                            description: "A section that orients the reader and sets the stage for a more detailed discussion in the document. It should be short as much as possible."
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
                                    description: "The total number of Best Management Practices (BMPs) mentioned in the plan."
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
                            description: "A list of milestones and their outcomes outlined in the watershed plan.",
                            items: {
                                type: "object",
                                properties: {
                                    description: {
                                        type: "string",
                                        description: "A short description or title of the project milestone or goal."
                                    },
                                    expectedOutcome: {
                                        type: "string",
                                        description: "The intended or measurable outcome associated with this goal, such as water quality improvement or BMP implementation."
                                    },
                                    planTimelineSchedule: {
                                        type: "array",
                                        description: "The planned/expected completion date in months, start month and end month, defaults to 0 if cannot be identified",
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
                            description: "A list of Best Management Practices (BMPs) planned or implemented in the watershed.",
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
                        "implementation": {
                            "type": "array",
                            "items": {
                            "type": "object",
                            "properties": {
                                "activity": { "type": "string" },
                                "timeline": {
                                    "type": "string",
                                    description: "The implementation months this goal will cover in the project timeline, start month and end month."
                                }
                            },
                            "required": ["activity"]
                            }
                        },
                        "monitoring": {
                            "type": "array",
                            "items": {
                            "type": "object",
                            "properties": {
                                "parameter": { "type": "string" },
                                "threshold": { "type": "string" }
                            },
                            "required": ["parameter", "threshold"]
                            }
                        },
                        "outreach": {
                            "type": "array",
                            "items": {
                            "type": "object",
                            "properties": {
                                "activity": { "type": "string" },
                                "audience": { "type": "string" }
                            },
                            "required": ["activity"]
                            }
                        },
                        "geographicAreas": {
                            "type": "array",
                            "items": {
                            "type": "object",
                            "properties": {
                                "name": { "type": "string" },
                                "type": { "type": "string" }
                            },
                            "required": ["name"]
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
