import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
  constructor() { }

  ngOnInit() {
  }


  public startMeter() {
    this.start = true;
  }

}
