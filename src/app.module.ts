import { Module } from '@nestjs/common';
import { QuoteModule } from './quote/quote.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/database/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfig,
      inject: [DatabaseConfig],
    }),
    QuoteModule,
  ],
  controllers: [],
  providers: [DatabaseConfig],
})
export class AppModule {}
