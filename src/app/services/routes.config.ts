
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { RouteModel } from '../services/routes.model';
import { HomeComponent } from '../home/home.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { BookinComponent } from '../bookin/bookin.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ContactComponent } from '../contact/contact.component';
import { LocationComponent } from '../location/location.component';
import { PricelistComponent } from '../pricelist/pricelist.component';


type AppRouteType = {
  HOME: RouteModel<HomeComponent>;
  ABOUT: RouteModel<LocationComponent>;
  BOOKING: RouteModel<BookinComponent>;
  CALENDAR:RouteModel<CalendarComponent>;
  CONTACT:RouteModel<ContactComponent>;
  PRICE:RouteModel<PricelistComponent>;
  GALLERY:RouteModel<GalleryComponent>;
};

export const APP_ROUTES: AppRouteType = {
  HOME: {
    url: 'home',
    title: marker('route.title.home'),
    component: HomeComponent,
    visibleInNavbar: true,
    subroutes: [],
  },
  ABOUT: {
    url: 'about',
    title: marker('route.title.about'),
    component: LocationComponent,
    visibleInNavbar: true,
  },
  BOOKING: {
    url: 'booking',
    title: marker('route.title.booking'),
    component: BookinComponent,
    visibleInNavbar: true,
  },
  CALENDAR: {
    url: 'calendar',
    title: marker('route.title.calendar'),
    component: CalendarComponent,
    visibleInNavbar: true,
  },
  CONTACT: {
    url: 'contact',
    title: marker('route.title.contact'),
    component: ContactComponent,
    visibleInNavbar: true,
  },
  PRICE: {
    url: 'pricelist',
    title: marker('route.title.price'),
    component: PricelistComponent,
    visibleInNavbar: true,
  },
  GALLERY: {
    url: 'gallery',
    title: marker('route.title.gallery'),
    component: GalleryComponent,
    visibleInNavbar: true,
  }




};

function routesToArray(routes: RouteModel<unknown> | AppRouteType): RouteModel<unknown>[] {
  const arr = [];

  for (let routeName in routes) {
    const route = (routes as any)[routeName];
    arr.push(route);
  }
  return arr;
}

export const APP_ROUTES_ARR = routesToArray(APP_ROUTES);