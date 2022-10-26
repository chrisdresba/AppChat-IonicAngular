import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Mensaje } from 'src/app/class/mensaje';
import { Observable } from 'rxjs';
import { MensajeService } from 'src/app/services/mensaje.service';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-sala-b',
  templateUrl: './sala-b.page.html',
  styleUrls: ['./sala-b.page.scss'],
})
export class SalaBPage implements OnInit {

  public usuario:string='';
  public listado: Array<any>= [];
  public listadoMensajes: Array<any>= [];
  public mensaje:string = '';
  

  constructor(
    public authSrv: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    private toast: ToastController,
    public chat: MensajeService,
    public firestore: AngularFirestore
  ) { 
    this.presentLoading();
    setTimeout(()=>{
      this.ordenarMensajes()
    },2000)
  }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  //  this.listadoMensajes = this.chat.chatsA;
  this.chat.getMensajesB().subscribe(aux => {
    this.listado = aux;
  })
  this.ordenarMensajes();
  
  }

  ordenarMensajes(){
    this.listadoMensajes = this.listado.sort((a?, b?) => (((a.referencia! > b.referencia!)) ? 1 : -1));
  }

  guardarMensaje() {
    this.chat.guardarMensajeB(this.usuario, this.mensaje);
    setTimeout(()=>{
      this.ordenarMensajes();
    },500)
    this.mensaje = '';
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Cargando...',
      duration: 2000,
      translucent: true,

      cssClass: 'my-loading-class'

    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

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

  Logout() {
    localStorage.removeItem('usuario');
    this.authSrv.SignOut();
    this.router.navigate(["login"]);
  }

  back(){
    this.router.navigate(["home"]);
  }

}
