import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { QuoteService } from './quote.service';
import { QuoteRepository } from "./quote.repository";
import { QuoteController } from './quote.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  providers: [QuoteService, QuoteRepository],
  exports: [QuoteService],
  controllers: [QuoteController],
})
export class QuoteModule {
}
