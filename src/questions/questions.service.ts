import { Injectable } from '@nestjs/common';
import { Question } from './interfaces/question.interface';

@Injectable()
export class QuestionsService {
  private readonly questions: Question[] = [
    {
      question: 'Which of these is NOT a real job title that appears in movie credits?',
      options: [
        { value: 'a', label: 'Splicer' },
        { value: 'b', label: 'Key Grip' },
        { value: 'c', label: 'Gaffer' },
        { value: 'd', label: 'Best Boy' },
      ],
      answer: 'a',
    },
    {
      question: 'Which of these actors DID NOT appear in Pulp Fiction?',
      options: [
        { value: 'a', label: 'Uma Thurman' },
        { value: 'b', label: 'John Turturro' },
        { value: 'c', label: 'Samuel L. Jackson' },
        { value: 'd', label: 'Bruce Willis' },
      ],
      answer: 'b',
    },
    {
      question: 'Which of these movies was NOT directed by M. Night Shyamalan',
      options: [
        { value: 'a', label: 'Glass' },
        { value: 'b', label: 'The Sixth Sense' },
        { value: 'c', label: 'Signs' },
        { value: 'd', label: 'The Ring' },
      ],
      answer: 'd',
    },
    {
      question: ' For which of these movies did Leonardo DiCaprio win an Oscar for Best Actor?',
      options: [
        { value: 'a', label: 'The Revenant' },
        { value: 'b', label: 'Titanic' },
        { value: 'c', label: 'Blood Diamond' },
        { value: 'd', label: 'The Last King of Scotland' },
      ],
      answer: 'a',
    },
  ];

  create(question: Question) {
    this.questions.push(question);
  }

  findAll(): Question[] {
    return this.questions;
  }
}
