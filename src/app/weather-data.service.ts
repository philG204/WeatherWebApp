import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { getSafePropertyAccessString } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private SearchValue? = new BehaviorSubject('');
  city = this.SearchValue?.asObservable();
  observableValue?: string;
  backEndURL!: string;
  header: HttpHeaders = new HttpHeaders({'X-RapidAPI-Key': 'b5475044fbmshb356a45b99552dfp1c821fjsn98caf85faf40', 'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'});

  constructor(private http: HttpClient) {
    this.backEndURL = "https://weatherapi-com.p.rapidapi.com";
   }

  getWeatherData(): Observable<WeatherData>{  
    this.city?.subscribe(value => this.observableValue = value)
    return this.http.get<WeatherData>(`${this.backEndURL}/current.json?q=${this.observableValue}`, {headers: this.header});
  }

  changeSearchValue(cityName: string): boolean{
    if(cityName != ""){
      this.SearchValue?.next(cityName);
      return true;
    }
    else{
      return false;
    }
  }
}
