import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from "src/app/services/auth.service";
import { ToastService } from "src/app/services/toast.service";
import { AngularFireAuth } from "@angular/fire/auth";


declare let window: any; 
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public usuarioLog: any;
  public usuario: any;


  constructor(
    public authSrv: AuthService,
    private router: Router,
    public toastSrv: ToastService,
    private toast: ToastController,
    public afAuth: AngularFireAuth
  ) {
  
  }

  ngOnInit() {
    this.usuarioLog = localStorage.getItem('usuario');
  }


  Logout() {
    localStorage.removeItem('usuario');
    this.authSrv.SignOut();
    this.router.navigate(["login"]);
  }


  async presentToast(header: string, message: string, color: string) {
    const toast = await this.toast.create({
      header,
      message,
      color,
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
}



