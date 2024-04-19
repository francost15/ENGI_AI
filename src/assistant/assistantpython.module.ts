/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AssistantPythonController } from './assistantpython.controller';
import { AssistantPythonService } from './assistantpython.service';

@Module({
  controllers: [AssistantPythonController],
  providers: [AssistantPythonService],
})
export class AssistantPythonModule {}
