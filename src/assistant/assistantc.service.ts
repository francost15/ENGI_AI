/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { checkCompleteStatusUseCaseC,createMessageUseCaseC, createRunUseCaseC, createThreadUseCaseC,getMessageListUseCaseC } from './use-cases';
import { QuestionDto } from './dtos/question.dto';

@Injectable()
export class AssistantCService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    async createThread() {
        return createThreadUseCaseC(this.openai);
    }
    async userQuestion(questionDto: QuestionDto){
        const {threadId,question} = questionDto
        const message = await createMessageUseCaseC(this.openai, {threadId,question});
        console.log({message});
        
        const run = await createRunUseCaseC(this.openai, {threadId});
        await checkCompleteStatusUseCaseC(this.openai, {runId:run.id,threadId:threadId});
        const messages = await getMessageListUseCaseC(this.openai, {threadId});
        return messages;
    }

}
