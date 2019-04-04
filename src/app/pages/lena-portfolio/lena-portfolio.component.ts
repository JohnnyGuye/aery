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
  // @ViewChild("searchSection")
  // gapfiller: ElementRef

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
    this.http.get("./assets/previous-creation.json")
      .subscribe(
        r => {
          for(let creation of r["creations"]) {
            let show = new Show()
            show.title = creation["title"]
            show.description = creation["description"]
            show.website = creation["website"]
            show.videoLink = creation["videoLink"]
            show.picturesLink = creation["picturesLink"]
            show.pictureLink = creation["pictureLink"] || ""
            show.start = new Date(creation["start"])
            show.end = new Date(creation["end"])
            let par = new Map<string, string[]>()
            for(let p in creation["participants"])
              par.set( p, creation["participants"][p] )
            show.participants = par
            // show.participants = creation["participants"]
            console.log( show.participants, creation["participants"] )
            this.shows.push( show )
          }
          console.log( this.shows )
        },
        e => console.error(e)
      )
  }

}
