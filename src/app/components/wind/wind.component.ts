import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var launchWind: any

@Component({
  selector: 'wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit, AfterViewInit {

  @ViewChild('canv')
  canv: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

     launchWind( this.canv.nativeElement )
  }

}
