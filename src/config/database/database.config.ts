import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';
import { Quote } from '../../quote/quote.entity';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  private TYPEORM_TYPE: DatabaseType = this.configService.get('TYPEORM_TYPE');
  private TYPEORM_HOST = this.configService.get('TYPEORM_HOST');
  private TYPEORM_PORT: number = this.configService.get('TYPEORM_PORT');
  private TYPEORM_USERNAME = this.configService.get('TYPEORM_USERNAME');
  private TYPEORM_PASSWORD = this.configService.get('TYPEORM_PASSWORD');
  private TYPEORM_DATABASE = this.configService.get('TYPEORM_DATABASE');
  private TYPEORM_SYNCHRONIZE = this.configService.get('TYPEORM_SYNCHRONIZE');

  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.TYPEORM_TYPE,
      host: this.TYPEORM_HOST,
      port: this.TYPEORM_PORT,
      username: this.TYPEORM_USERNAME,
      password: this.TYPEORM_PASSWORD,
      database: this.TYPEORM_DATABASE,
      entities: [Quote],
      synchronize: this.TYPEORM_SYNCHRONIZE,
    };
  }
}
