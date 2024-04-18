/* eslint-disable prettier/prettier */
import OpenAI from "openai";

interface Options {
    threadId: string;
    assistantId?: string;
}
export const createRunUseCaseJava = async (openai: OpenAI,options:Options) => {
const {threadId,assistantId = 'asst_uFS22AF00ELb8YqF2pJtiMZS'} = options;
const run = await openai.beta.threads.runs.create(threadId,{
    assistant_id: assistantId,
    //instructions //sobrescribe el asistente no se usa esto
});
console.log(run);
return run; 
}