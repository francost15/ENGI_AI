/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import {checkCompleteStatusUseCasePython,createMessageUseCasePython,
    createRunUseCasePython,createThreadUseCasePython, getMessageListUseCasePython } from './use-cases';
import { QuestionDto } from './dtos/question.dto';


@Injectable()
export class AssistantPythonService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    async createThread() {
        return createThreadUseCasePython(this.openai);
    }
    async userQuestion(questionDto: QuestionDto){
        const {threadId,question} = questionDto
        const message = await createMessageUseCasePython(this.openai, {threadId,question});
        console.log({message});
        
        const run = await createRunUseCasePython(this.openai, {threadId});
        await checkCompleteStatusUseCasePython(this.openai, {runId:run.id,threadId:threadId});
        const messages = await getMessageListUseCasePython(this.openai, {threadId});
        return messages;
    }

}
