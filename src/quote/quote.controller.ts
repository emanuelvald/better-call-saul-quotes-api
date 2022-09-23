import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { QuoteService } from './quote.service';
import { Quote } from './entities/quote.entity';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Crud({
  model: { type: Quote },
  dto: { create: CreateQuoteDto },
  query: {
    allow: ['message', 'author'],
  },
  routes: {
    only: ['getOneBase', 'getManyBase', 'createOneBase', 'createManyBase'],
    createOneBase: {
      decorators: [UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))],
    },
  },
})

@Controller('quote')
export class QuoteController implements CrudController<Quote> {
  constructor(public service: QuoteService) {
  }
}
