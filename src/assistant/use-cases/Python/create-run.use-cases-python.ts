/* eslint-disable prettier/prettier */
import OpenAI from "openai";

interface Options {
    threadId: string;
    assistantId?: string;
}
export const createRunUseCasePython = async (openai: OpenAI,options:Options) => {
const {threadId,assistantId = 'asst_ZaoDhEs7qqTPeYX90um8NPU7'} = options;
const run = await openai.beta.threads.runs.create(threadId,{
    assistant_id: assistantId,
    //instructions //sobrescribe el asistente no se usa esto
});
console.log(run);
return run; 
}