/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AssistantModule } from './assistant/assistant.module';
import { AssistantCModule } from './assistant/assistantc.module';
import { AssistantPythonModule } from './assistant/assistantpython.module';
import { AssistantJavaModule } from './assistant/assistantjava.module';

@Module({

  imports: [
    ConfigModule.forRoot(),
    AssistantModule,
    AssistantCModule,
    AssistantPythonModule,
    AssistantJavaModule
  ]
})
export class AppModule {}
