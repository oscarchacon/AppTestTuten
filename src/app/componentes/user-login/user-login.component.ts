import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../_services/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loading: boolean = false;
  private user: string;
  private pass: string;

  constructor(
    private autentificacionService: AutentificacionService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.autentificacionService.login(this.user, this.pass).subscribe(
      data => {
        // console.log("log");
        // this.userService.getUsuarioAutenticado().subscribe(
        //     x => {
        this.loading = false;
        //this.router.navigate(['./lista']);
        // }
        // );
      },
      error => {
        //this.alertService.error(error);
        this.loading = false;
      }
    );
  }

  onSubmit(form) {
    this.user = form.value["usuario"];
    this.pass = form.value["password"];
    this.login();
  }

}
