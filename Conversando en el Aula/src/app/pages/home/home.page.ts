import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from "src/app/services/auth.service";
import { ToastService } from "src/app/services/toast.service";
import { AngularFireAuth } from "@angular/fire/auth";


declare let window: any; // Don't forget this part!
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
    public alertController: AlertController,
    public afAuth: AngularFireAuth
  ) {
  
  }


  ngOnInit() {
    this.usuarioLog = localStorage.getItem('usuario');
  }



  async ShowtToastQrLimit() {
    this.presentToast("Créditos", "Este código ya fue cargado", "warning");
  }
  async ShowtToastCargaOk(credito: number) {
    this.presentToast("Créditos", "La operación se realizo correctamente", "success");
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



