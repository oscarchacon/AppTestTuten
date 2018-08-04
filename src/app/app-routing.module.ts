import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from './componentes/user-login/user-login.component';
import { BookingListaComponent } from './componentes/booking-lista/booking-lista.component';

const routes: Routes = [
  { path: "", component: UserLoginComponent },
  { path: "lista", component: BookingListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
