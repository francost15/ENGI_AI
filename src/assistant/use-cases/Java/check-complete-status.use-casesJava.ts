/* eslint-disable prettier/prettier */
import OpenAI from 'openai';
interface Options {
    threadId: string;
    runId: string;
}
export const checkCompleteStatusUseCasePython = async (openai:OpenAI, options:Options) => {
    const { threadId, runId } = options;
    const runStatus = await openai.beta.threads.runs.retrieve(
        threadId, 
        runId
    );
    console.log({status: runStatus.status}); //completed
    if (runStatus.status === 'completed') {
        return runStatus;
    }
    //Esperar un segundo
    await new Promise(resolve => setTimeout(resolve,1000));
    return await checkCompleteStatusUseCasePython(openai, options);
}