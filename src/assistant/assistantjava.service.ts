/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { checkCompleteStatusUseCaseJava, createMessageUseCaseJava, createRunUseCaseJava, 
    createThreadUseCaseJava,getMessageListUseCaseJava } from './use-cases';
import { QuestionDto } from './dtos/question.dto';

@Injectable()
export class AssistantJavaService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    async createThread() {
        return createThreadUseCaseJava(this.openai);
    }
    async userQuestion(questionDto: QuestionDto){
        const {threadId,question} = questionDto
        const message = await createMessageUseCaseJava(this.openai, {threadId,question});
        console.log({message});
        
        const run = await createRunUseCaseJava(this.openai, {threadId});
        await checkCompleteStatusUseCaseJava(this.openai, {runId:run.id,threadId:threadId});
        const messages = await getMessageListUseCaseJava(this.openai, {threadId});
        return messages;
    }

}
