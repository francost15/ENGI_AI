/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AssistantJavaService } from './assistantjava.service';
import { AssistantJavaController } from './assistantjava.controller';

@Module({
  controllers: [AssistantJavaController],
  providers: [AssistantJavaService],
})
export class AssistantJavaModule {}
