import { Controller, Get, HttpStatus, Param, ParseIntPipe, UsePipes } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './entities/quote.entity';
import { PositiveIntPipe } from "../common/pipes/positive-int.pipe";

@Controller('quote')
export class QuoteController {
  constructor(public quoteService: QuoteService) {
  }

  @Get('/:quoteId')
  @UsePipes(new PositiveIntPipe())
  getOneQuote(@Param('quoteId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}), PositiveIntPipe) quoteId: number): Promise<Quote> {
    return this.quoteService.getOneQuoteById(quoteId)
  }
}
