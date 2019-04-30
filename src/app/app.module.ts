import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LenaPortfolioComponent } from './pages/lena-portfolio/lena-portfolio.component';
import { WindComponent } from './components/wind/wind.component';
import { CreationsListComponent } from './components/creations-list/creations-list.component';
import { ShowComponent } from './components/show/show.component';
import { SafePipe } from './pipes/safe.pipe';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LenaPortfolioComponent,
    WindComponent,
    ShowComponent,
    SafePipe,
    MapToIterablePipe,
    CreationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
