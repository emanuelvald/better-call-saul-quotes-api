import { Module } from '@nestjs/common';
import { QuoteModule } from './quote/quote.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote/entities/quote.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'jelani.db.elephantsql.com',
    port: 5432,
    username: 'hdcwpppu',
    password: 'wTwtckC0hEdJMs1pPCCzzCRnWW-hkKRz',
    database: 'hdcwpppu',
    entities: [Quote],
    synchronize: true,
  }),
    QuoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
