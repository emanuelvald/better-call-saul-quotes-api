import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './quote.entity';
import { PositiveIntPipe } from '../common/pipes/positive-int.pipe';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { MaxLengthIntPipe } from '../common/pipes/max-length-int.pipe';

@Controller('quotes')
export class QuoteController {
  constructor(public quoteService: QuoteService) {}

  @Get()
  getAllQuotes() {
    return this.quoteService.getAllQuotes();
  }

  @Get('/id/:quoteId')
  @UsePipes(
    new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    new PositiveIntPipe(),
    new MaxLengthIntPipe(),
  )
  getOneQuoteById(
    @Param('quoteId')
    quoteId: number,
  ): Promise<Quote> {
    return this.quoteService.getOneQuoteById(quoteId);
  }

  @Get('/random')
  getRandomQuote() {
    return this.quoteService.getRandomQuote();
  }

  @Post()
  createOneQuote(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quoteService.createOneQuote(createQuoteDto);
  }
}
