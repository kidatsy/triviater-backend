import { Injectable } from '@nestjs/common';
import { Question } from './interfaces/question.interface';

@Injectable()
export class QuestionsService {
  private readonly questions: Question[] = [];

  create(question: Question) {
    this.questions.push(question);
  }

  findAll(): Question[] {
    return this.questions;
  }
}
