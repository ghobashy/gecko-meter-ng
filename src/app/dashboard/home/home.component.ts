import { ConfigService } from './../../shared/services/config.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { IMeterConfig } from '../../shared/models/meter-config.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('changeState', [
      state('init', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('start', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>init', animate('300ms')),
      transition('*=>stastartte2', animate('2000ms'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  public start = false;
  public minValue;
  public maxValue;
  public value;
  public format;
  public unit;
  public errorMessage = '';

  /**
   * @constructor
   * @param configService injecting config service to Home screen
   */
  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }


  /**
   * Start Gecko Meter
   */
  public startMeter() {
    this.start = true;
  }

  public getMeasures() {
    this.errorMessage = '';
    this.configService.getNewMeasues().subscribe((response: IMeterConfig) => {
      console.log('Subscribe response', response);
      if (response) {
        this.minValue = response.min;
        this.maxValue = response.max;
        this.value = response.value;
      }
    }, (error) => {
      this.errorMessage = typeof (error) === 'string' ? error : error.message;
    });

  }

}
