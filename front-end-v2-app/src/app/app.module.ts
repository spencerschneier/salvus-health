import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenu,
  MatMenuModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { OptionsSectionComponent } from './options-section/options-section.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { LoginComponent } from './login/login.component';
import { DoctorCardComponent } from './cards/doctor-card/doctor-card.component';
import { DoctorProfileTemplateComponent } from './doctor-profile-template/doctor-profile-template.component';
import {DoctorProfileInfoService} from './doctor-profile-template/doctor-profile-info.service';

@NgModule({
  declarations: [
    AppComponent,
    OptionsSectionComponent,
    InitialPageComponent,
    LoginComponent,
    DoctorCardComponent,
    DoctorProfileTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
  ],
  providers: [DoctorProfileInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
