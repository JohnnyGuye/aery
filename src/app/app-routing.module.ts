import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenaPortfolioComponent } from './pages/lena-portfolio/lena-portfolio.component';

const routes: Routes = [
  {
    path : "",
    component : LenaPortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
