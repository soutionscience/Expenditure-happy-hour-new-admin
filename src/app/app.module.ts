import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { restangularConfigFactory } from './SHARED/restangular.config';
import {Restangular, RestangularModule} from 'ngx-restangular'
import { MatIconModule, } from '@angular/material/icon';
import{ MatDialogModule} from '@angular/material/dialog';
import { NewPackageComponent } from './DIALOGS/new-package/new-package.component'
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './DIALOGS/delete/delete.component';

import { NewDayComponent } from './PAGES/new-day/new-day.component';
import { ImageUploadComponent } from './ELEMENTS/image-upload/image-upload.component';
import { CountryPickerModule } from 'ngx-country-picker';



@NgModule({
  declarations: [ NewPackageComponent, DeleteComponent, ImageUploadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot(restangularConfigFactory),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
   CountryPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
