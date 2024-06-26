/* eslint-disable prettier/prettier */
import OpenAI from "openai";

export const createThreadUseCaseC = async (openai: OpenAI) => {
    const {id} = await openai.beta.threads.create();
    return {id};
}