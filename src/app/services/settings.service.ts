import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.initLanguage();
  }
  //#region Language settings

  private _currentLanguage: BehaviorSubject<AppLanguage> =
    new BehaviorSubject<AppLanguage>(DEFAULT_LANGUAGE);
  private readonly _availableLanguages: AppLanguage[] = ['en', 'hr','de','it'];

  public get availableLanguages() {
    return this._availableLanguages;
  }

  public get currentLanguage() {
    return this._currentLanguage as Observable<AppLanguage>;
  }

  private initLanguage() {
    // setting the fallback language (in case no translations were found for the current language)
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);

    // each time the app language changes, take note of it
    this.translateService.onLangChange.subscribe((val) => {
      this._currentLanguage.next(val.lang as AppLanguage);
      // console.log('Language set to', this._currentLanguage.value);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        const queryParams = event.state.root.queryParams;
        const lang = queryParams['lang'];
        // if there is a language specified in URL, then use that language
        if (lang && this.availableLanguages.includes(lang)) {
          this.translateService.use(lang);
        } else {
          // if there is no langugage in URL, use the default language
          this.translateService.use(DEFAULT_LANGUAGE);
          // console.log('navigating...');
        }
      }
    });
  }
  //#endregion

  //#region Theme settings
 
}

export const DEFAULT_LANGUAGE: AppLanguage = 'en';
export type AppLanguage = 'de' | 'en'|'hr'|'it';
export type AppTheme = 'dark-theme' | 'light-theme';
