import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AutentificacionService } from './componentes/_services/autentificacion.service';
import { AppRoutingModule } from './app-routing.module';
import { RequestInterceptorProvider, RequestInterceptor } from './componentes/_helpers/request.interceptor';
import { BookingListaComponent } from './componentes/booking-lista/booking-lista.component';
import { LoadingComponent } from './componentes/_helpers/loading.component';
import { BookingService } from './componentes/_services/booking.service';
import { FechaPipe } from './componentes/pipes/fecha.pipe';
import { TableFilteredPipe } from './componentes/pipes/table-filtered.pipe';
import { NumbersOnlyDirective } from './componentes/_helpers/numbers-only.directive';
import { TableFilterMayorPipe } from './componentes/pipes/table-filter-mayor.pipe';
import { TableFilterMenorPipe } from './componentes/pipes/table-filter-menor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    BookingListaComponent,
    LoadingComponent,
    FechaPipe,
    TableFilteredPipe,
    NumbersOnlyDirective,
    TableFilterMayorPipe,
    TableFilterMenorPipe
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
    RequestInterceptorProvider,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
