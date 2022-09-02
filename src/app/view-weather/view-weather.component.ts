import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.scss']
})
export class ViewWeatherComponent implements OnInit {

  weatherData?: WeatherData;

  constructor(private wds: WeatherDataService) { }

  ngOnInit(): void {
    console.log(this.weatherData);
    this.wds.getWeatherData().subscribe(response => this.weatherData = response);
  }

}
