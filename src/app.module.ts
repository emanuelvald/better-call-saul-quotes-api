import { Module } from '@nestjs/common';
import { QuoteModule } from './quote/quote.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import postgresqlConfig from './config/database/postgresql/postgresql.config';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresqlConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get<string>('postgresql.type'),
          host: configService.get<string>('postgresql.host'),
          port: configService.get<number>('postgresql.port'),
          username: configService.get<string>('postgresql.username'),
          password: configService.get<string>('postgresql.password'),
          database: configService.get<string>('postgresql.database'),
          entities: configService.get('postgresql.entities'),
          synchronize: configService.get<boolean>('postgresql.synchronize'),
        } as DataSourceOptions),
    }),
    QuoteModule,
  ],
  controllers: [],
})
export class AppModule {}
