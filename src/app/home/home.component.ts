import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from 'src/app/services/routes.config';
import { SettingsService } from 'src/app/services/settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public readonly AboutUsUrl: string = APP_ROUTES.ABOUT.url;
  
  public get currentLanguage() {
    return this.settingsService.currentLanguage;
  }



  constructor(
    private settingsService: SettingsService
  ) { }



  ngOnInit(): void {
  }

}

