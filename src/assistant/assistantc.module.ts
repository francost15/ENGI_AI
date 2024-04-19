/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AssistantCController } from './assistantc.controller';
import { AssistantCService } from './assistantc.service';

@Module({
  controllers: [AssistantCController],
  providers: [AssistantCService],
})
export class AssistantCModule {}
