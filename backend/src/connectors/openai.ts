import OpenAI from 'openai';
import config from '../config/openai';
import ExtractReportResult from '../interfaces/ExtractReportResult';

let client: OpenAI;

export default (key?: string) => {
  // Put initializations here
  client = new OpenAI({ apiKey: key || config.apiKey });
};

export const getSummary = async (input: string): Promise<ExtractReportResult> => {
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: config.systemPrompt },
      { role: "user", content: input }
    ], 
    tools: config.tools,
    tool_choice: config.tool_choice
  });
  // return response;
  const toolCalls = response.choices[0].message.tool_calls;
  if (toolCalls && toolCalls.length) {
    return JSON.parse(toolCalls[0].function.arguments) as ExtractReportResult;
  } else {
    throw new Error('No tool calls returned in the response');
  }
};
