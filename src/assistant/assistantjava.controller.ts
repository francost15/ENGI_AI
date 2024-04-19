/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { AssistantJavaService } from './assistantjava.service';

@Controller('java')
export class AssistantJavaController {
  
  constructor(private readonly assistantService: AssistantJavaService) {}
  
  @Post('create-thread')
  async createThread(){
    return await this.assistantService.createThread();
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto: QuestionDto
  ){
    return this.assistantService.userQuestion(questionDto);
  }

}
