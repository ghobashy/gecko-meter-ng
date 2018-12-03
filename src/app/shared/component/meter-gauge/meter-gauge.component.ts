import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';

export const scaleAnimation = (value) => {
  return trigger(`scaleAnimation`, [
    state('start', style({ transform: 'rotate(0)' })),
    state('end', style({ transform: 'rotate(-180deg)' })),
    transition('start => end', [style({ transform: 'rotate(-360deg)' }), animate('350ms ease-out')]),
    transition('end => start', animate('350ms ease-in'))
    // state('0', style({
    //     overflow: 'hidden',
    //     height: '*'
    // })),
    // state('1', style({
    //     overflow: 'hidden',
    //     height: `${height}px`
    // })),
    // transition('1 => 0', animate('400ms ease-in-out')),
    // transition('0 => 1', animate('400ms ease-in-out'))
  ]);
};

@Component({
  selector: 'app-meter-gauge',
  templateUrl: './meter-gauge.component.html',
  styleUrls: ['./meter-gauge.component.scss'],
  animations: [trigger(`scaleAnimation`, [
    state('start', style({ transform: 'rotate(-90deg)' })),
    state('end', style({ transform: 'rotate(70deg)' })),
    transition('start => end', [style({ transform: 'rotate(-360deg)' }), animate('350ms ease-out')]),
    transition('end => start', animate('350ms ease-in'))
    // state('0', style({
    //     overflow: 'hidden',
    //     height: '*'
    // })),
    // state('1', style({
    //     overflow: 'hidden',
    //     height: `${height}px`
    // })),
    // transition('1 => 0', animate('400ms ease-in-out')),
    // transition('0 => 1', animate('400ms ease-in-out'))
  ])]
})
export class MeterGaugeComponent implements OnInit, AfterViewInit {

  @Input()
  private maxValue: number;
  @Input()
  private minValue: number;
  @Input()
  private value: number;

  public calcValue = 0;
  public rotateValueStr = '';
  public translateValueStr = '';
  public animationState = 'end';

  constructor() { }

  ngOnInit() {
    const calcPercentage = (this.value * 100) / (this.maxValue - this.minValue);
    this.calcValue = calcPercentage * 1.8 - 45;

    // this.rotateValueStr = `rotate( ${this.value} deg)`;
    // this.translateValueStr = `translate(-50%, -50%) rotate( ${this.value * 1.8} deg)`;
    // $('.circle-inner, .gauge-copy').css({
    //   'transform': 'rotate(' + newVal + 'deg)'
    // });
    // $('.gauge-copy').css({
    //   'transform': 'translate(-50%, -50%) rotate(' + dVal * 1.8 + 'deg)'
    // });

    // $('.percentage').text(dVal + ' %');

    // $(function(){
    //   $('.text-box').keyup(function(){
    //     if ($('.text-box').val() == '') {
    //       $('.circle-inner, .gauge-copy').css({
    //         'transform' : 'rotate(-45deg)'
    //       });
    //       $('.gauge-copy').css({
    //         'transform' : 'translate(-50%, -50%) rotate(0deg)'
    //       });
    //       $('.percentage').text('0 %');
    //     } else if($('.text-box').val() >= 0 && $('.text-box').val() <= 100) {
    //       var dVal = $(this).val();
    //       var newVal = dVal * 1.8 - 45;
    //       $('.circle-inner, .gauge-copy').css({
    //         'transform' : 'rotate(' + newVal + 'deg)'
    //       });
    //       $('.gauge-copy').css({
    //         'transform' : 'translate(-50%, -50%) rotate(' + dVal * 1.8 + 'deg)'
    //       });
    //       $('.percentage').text(dVal + ' %');
    //     } else {
    //       $('.percentage').text('Invalid input value');
    //     }
    //   });
    // });
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.animationState = 'start';
    }, 5000);

  }

}
