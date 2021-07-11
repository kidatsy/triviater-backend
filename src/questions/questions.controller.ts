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
import { QuestionCreateDto } from './dto/questionCreateDto';

@Controller('questions')
export class QuestionsController {
  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all questions';
  // }

  @Get()
  async findAll(): Promise<string /* any[] */> {
    return 'This action returns all questions';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns question with ID: #${params.id}`;
  }

  @Post()
  // @HttpCode(200)
  // @Header('Cache-Control', 'none')
  create(@Body() questionCreateDto: QuestionCreateDto): string {
    return 'This action adds a new question';
  }
};
