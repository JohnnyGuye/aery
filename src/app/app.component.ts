import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'aery-website';

  ngAfterViewInit() {
    let c = document.getElementById("wind")
    setTimeout(()=> {
      c.style.transition = "opacity 2s"
      c.style.opacity = "0"
      setTimeout(() => { c.style.display = "none" }, 2000)
    }, 3000)
  }
}
