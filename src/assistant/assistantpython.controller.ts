/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { AssistantPythonService } from './assistantpython.service';

@Controller('python')
export class AssistantPythonController {
  
  constructor(private readonly assistantService: AssistantPythonService) {}
  
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
