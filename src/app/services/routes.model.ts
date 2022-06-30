import { Type } from '@angular/core';

export interface RouteModel<ComponentType> {
  url: string;
  title: string,
  component: Type<ComponentType>;
  visibleInNavbar: boolean,
  subroutes?: RouteModel<unknown>[];
}
