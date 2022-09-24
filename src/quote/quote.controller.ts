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
import { Quote } from './entities/quote.entity';
import { PositiveIntPipe } from '../common/pipes/positive-int.pipe';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { MaxLengthIntPipe } from '../common/pipes/max-length-int.pipe';

@Controller('quote')
export class QuoteController {
  constructor(public quoteService: QuoteService) {}

  @Get('/:quoteId')
  @UsePipes(
    new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    new PositiveIntPipe(),
    new MaxLengthIntPipe(),
  )
  getOneQuote(
    @Param('quoteId')
    quoteId: number,
  ): Promise<Quote> {
    return this.quoteService.getOneQuoteById(quoteId);
  }

  @Post()
  createOneQuote(@Body() newQuote: CreateQuoteDto) {
    return this.quoteService.createOneQuote(newQuote);
  }
}
