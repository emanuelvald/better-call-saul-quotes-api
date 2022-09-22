import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { QuoteService } from './quote.service';
import { Quote } from './entities/quote.entity';

@Crud({
  model: { type: Quote }, routes: {
    only: ['getOneBase', 'getManyBase', 'createOneBase', 'createManyBase', 'replaceOneBase'],
  },
})

@Controller('quote')
export class QuoteController implements CrudController<Quote> {
  constructor(public service: QuoteService) {
  }
}
