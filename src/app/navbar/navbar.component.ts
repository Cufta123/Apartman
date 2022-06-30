
import {Component,EventEmitter,OnDestroy,OnInit,Output,} from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { RouteModel } from 'src/app/services/routes.model';
import {AppLanguage, AppTheme,SettingsService,} from 'src/app/services/settings.service';
import { APP_ROUTES_ARR } from 'src/app/services/routes.config';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output('activeRouteChange') activeRouteChange = new EventEmitter<{
    activeRoute: RouteModel<unknown>;
    index: number;
  }>();

  public readonly AppRoutes = APP_ROUTES_ARR;
  public appLanguages = this.settingsService.availableLanguages;
  public currentLanguage = this.settingsService.currentLanguage;

  private _destroyed = new Subject();

  public activeRouteIndex = 0;

  constructor(
      private settingsService: SettingsService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.subscribeToRouteChanges();
  }
  ngOnDestroy(): void {
    this._destroyed.next(null);
    this._destroyed.complete();
    this.activeRouteChange.complete();
  }
  private subscribeToRouteChanges() {
    this.router.events.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        const urlWithoutQueryParams = this.router.parseUrl(
          event.urlAfterRedirects
        );
        urlWithoutQueryParams.queryParams = {};
        const i = this.findActiveRouteIndex(urlWithoutQueryParams.toString());
        this.activeRouteIndex = i;
        this.activeRouteChange.emit({
          activeRoute: this.AppRoutes[i],
          index: i,
        });
      }
    });
  }
  private findActiveRouteIndex(url: string): number {
    const activeRouteIndex = this.AppRoutes.findIndex((route) => {
      return url.endsWith(`/${route.url}`);
    });

    return activeRouteIndex;
  }

  public changeLanguage(lang: AppLanguage) {
    this.router.navigate([], { queryParams: { lang: lang } });
  }
}


