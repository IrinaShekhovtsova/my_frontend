import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { EnergycardComponent } from './info/energycard/energycard.component';
import { EditingComponent } from './editing/editing.component';
import { DialogComponent } from './editing/dialog/dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    FooterComponent,
    LoginComponent,
    InfoComponent,
    HeaderComponent,
    EnergycardComponent,
    EditingComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
