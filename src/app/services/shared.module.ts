import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [TranslateModule,AppRoutingModule],
  })
  export class SharedModule {}
  