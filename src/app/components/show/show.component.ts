import { Component, OnInit, Input } from '@angular/core';
import { Show } from "../../models/show"

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @Input()
  show: Show

  constructor() { }

  ngOnInit() {
  }

}
