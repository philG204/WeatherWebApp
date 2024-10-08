import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeatherComponent } from './view-weather.component';

describe('ViewWeatherComponent', () => {
  let component: ViewWeatherComponent;
  let fixture: ComponentFixture<ViewWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
