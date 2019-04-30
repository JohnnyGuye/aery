import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Show } from "../../models/show"

@Component({
  selector: 'app-lena-portfolio',
  templateUrl: './lena-portfolio.component.html',
  styleUrls: ['./lena-portfolio.component.scss']
})
export class LenaPortfolioComponent implements OnInit {

  @ViewChild("content")
  content: ElementRef

  shows: Show[] = []
  listDisplayed = "past"

  reduceNavbar: boolean = false;

  @HostListener("window:scroll", [] )
  onWindowScroll() {
    if(this.content.nativeElement.getBoundingClientRect().top < -70) {
      this.reduceNavbar = true
    } else {
      this.reduceNavbar = false
    }
  }


  constructor( private http: HttpClient ) { }

  ngOnInit() {

  }

}
