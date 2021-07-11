import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsController } from './questions/questions.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    QuestionsController,
  ],
  providers: [AppService],
})
export class AppModule {}
