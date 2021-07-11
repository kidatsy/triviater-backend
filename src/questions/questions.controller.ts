import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Param,
  HttpCode,
  Header,
} from '@nestjs/common';
import { Request } from 'express';
import { QuestionCreateDto } from './dto/question-create.dto';
import { QuestionsService } from './questions.service';
import { Question } from './interfaces/question.interface';

@Controller('questions')
export class QuestionsController {
  constructor(
    private questionsService: QuestionsService,
  ) {}

  @Post()
  async create(@Body() questionCreateDto: QuestionCreateDto) {
    this.questionsService.create(questionCreateDto);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }

  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all questions';
  // }

  // @Get()
  // async findAll(): Promise<string /* any[] */> {
  //   return 'This action returns all questions';
  // }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns question with ID: #${params.id}`;
  // }

  // @Post()
  // // @HttpCode(200)
  // // @Header('Cache-Control', 'none')
  // create(@Body() questionCreateDto: QuestionCreateDto): string {
  //   return 'This action adds a new question';
  // }
};
