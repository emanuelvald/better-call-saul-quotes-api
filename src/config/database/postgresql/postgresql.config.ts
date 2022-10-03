import { registerAs } from '@nestjs/config';
import { Quote } from '../../../quote/quote.entity';

export default registerAs('postgresql', () => {
  return {
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Quote],
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
  };
});
