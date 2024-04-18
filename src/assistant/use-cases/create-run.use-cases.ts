/* eslint-disable prettier/prettier */
import OpenAI from "openai";

interface Options {
    threadId: string;
    assistantId?: string;
}
export const createRunUseCase = async (openai: OpenAI,options:Options) => {
const {threadId,assistantId = 'asst_qlOztoUl7mznhJicfNakTMU3'} = options;
const run = await openai.beta.threads.runs.create(threadId,{
    assistant_id: assistantId,
    //instructions //sobrescribe el asistente no se usa esto
});
console.log(run);
return run;
}