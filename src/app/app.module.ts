import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MaskImageComponent } from './mask-image/mask-image.component';
import { FooterComponent } from './footer/footer.component';
import { DEFAULT_LANGUAGE} from './services/settings.service';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import{SharedModule} from'./services/shared.module';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { LocationModule } from './location/location.module';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule} from '@angular/material/menu';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaskImageComponent,
    FooterComponent,
    HomeComponent,
    LocationComponent,
    
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LocationModule,
    MatIconModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      defaultLanguage: DEFAULT_LANGUAGE,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        } 
    }),
    MatMenuModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    MdbCollapseModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
