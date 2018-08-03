import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AutentificacionService } from './componentes/_services/autentificacion.service';
import { AppRoutingModule } from './app-routing.module';
import { RequestInterceptorProvider } from './componentes/_helpers/request.interceptor';
import { BookingListaComponent } from './componentes/booking-lista/booking-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    BookingListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AutentificacionService,
    RequestInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
