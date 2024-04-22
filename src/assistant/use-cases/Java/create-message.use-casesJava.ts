/* eslint-disable prettier/prettier */
import OpenAI from "openai";

interface Options {
    threadId: string;
    question: string;
}
export const createMessageUseCaseJava = async (openai: OpenAI, options: Options) => {
    const {threadId, question} = options;
    const message = await openai.beta.threads.messages.create(threadId,{
        role: 'user',
        content: question,
    });
    return message;
}