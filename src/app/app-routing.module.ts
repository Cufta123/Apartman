import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './services/routes.config';
const routes: Routes = [
  { path: APP_ROUTES.HOME.url, component: APP_ROUTES.HOME.component },
  { path: APP_ROUTES.ABOUT.url, component: APP_ROUTES.ABOUT.component },
  { path: APP_ROUTES.BOOKING.url, component: APP_ROUTES.BOOKING.component },
  { path: APP_ROUTES.CALENDAR.url, component: APP_ROUTES.CALENDAR.component },
  { path: APP_ROUTES.CONTACT.url, component: APP_ROUTES.CONTACT.component },
  { path: APP_ROUTES.PRICELIST.url, component: APP_ROUTES.PRICELIST.component },
  {path: APP_ROUTES.GALLERY.url, component: APP_ROUTES.GALLERY.component},
  {path: '**', redirectTo: APP_ROUTES.HOME.url },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

