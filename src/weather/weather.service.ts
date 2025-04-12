import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './weather.entity';
import axios from 'axios';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private repo: Repository<Weather>,
  ) {}

  async fetchAndSave(lat: number, lon: number, part: string) {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;

    const { data } = await axios.get(url);
    const weather = this.repo.create({ lat, lon, part, data });
    return await this.repo.save(weather);
  }

  async getFromDb(lat: number, lon: number, part: string) {
    return this.repo.findOneBy({ lat, lon, part });
  }
}
