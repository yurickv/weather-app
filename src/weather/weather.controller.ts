import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { TransformInterceptor } from './response.interceptor';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post('fetch')
  async fetchWeather(@Body() body: { lat: number; lon: number; part: string }) {
    return this.weatherService.fetchAndSave(body.lat, body.lon, body.part);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  async getWeather(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
    @Query('part') part: string,
  ) {
    return this.weatherService.getFromDb(+lat, +lon, part);
  }
}
