/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { AssistantCService } from './assistantc.service';

@Controller('c')
export class AssistantCController {
  
  constructor(private readonly assistantService: AssistantCService) {}
  
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
