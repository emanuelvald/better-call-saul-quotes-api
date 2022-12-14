import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): number {
    if (Number(value) <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          message: 'Validation failed (Value must be number grater then 0)',
          error: 'Not Acceptable',
        },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return Number(value);
  }
}
