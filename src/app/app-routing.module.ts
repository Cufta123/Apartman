import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookinComponent } from './bookin/bookin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PricelistComponent } from './pricelist/pricelist.component';
const routes: Routes = [
  {path:'contact',component: ContactComponent},
  {path:'bookin',component: BookinComponent},
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found'},
  {path:'location',component:LocationComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'pricelist',component:PricelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ContactComponent,BookinComponent,HomeComponent,LocationComponent,CalendarComponent,PricelistComponent]
