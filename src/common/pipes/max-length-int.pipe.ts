import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MaxLengthIntPipe implements PipeTransform<number> {
  transform(value: number, metadata: ArgumentMetadata): number {
    if (value > 2147483647) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          message: `Validation failed (Value ${value} is out of range for type integer)`,
          error: 'Not Acceptable',
        },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return value;
  }
}
