import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Show } from "../../models/show"

@Component({
  selector: 'creations-list',
  templateUrl: './creations-list.component.html',
  styleUrls: ['./creations-list.component.scss']
})
export class CreationsListComponent implements OnInit {


  private _creationLink: string = ""

  @Input()
  hide: boolean = false

  @Input('creationLink')
  set creationLink(val: string) {
    this._creationLink = val
    this.retrieveCreations()
  }

  get creationLink() {
    return this._creationLink
  }

  shows: Show[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.retrieveCreations()
  }

  private retrieveCreations() {
    let cl = this._creationLink
    if(!cl) return
    this.http.get(this._creationLink)
      .subscribe(
        r => {
          let newShows = []
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
            newShows.push( show )
          }
          if( cl == this._creationLink)
            this.shows = newShows
        },
        e => console.error(e)
      )
  }

}
