import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const current = data?.data?.current;
        return {
          sunrise: current?.sunrise,
          sunset: current?.sunset,
          temp: current?.temp,
          feels_like: current?.feels_like,
          pressure: current?.pressure,
          humidity: current?.humidity,
          uvi: current?.uvi,
          wind_speed: current?.wind_speed,
        };
      }),
    );
  }
}
