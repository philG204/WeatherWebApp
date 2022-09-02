import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherData } from '../weather-data';
import { WeatherDataService } from '../weather-data.service';
import { ViewWeatherComponent } from '../view-weather/view-weather.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })  
  container!: ViewContainerRef;  
  city: string = "";

  constructor(private wds: WeatherDataService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  SearchForCity(){
      if(this.wds.changeSearchValue(this.city)){
        this.container.clear();
        const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ViewWeatherComponent);   
        const componentRef = this.container.createComponent(dynamicComponentFactory);
        this.city = "";
      }
      else{
        
      }
  }
}
