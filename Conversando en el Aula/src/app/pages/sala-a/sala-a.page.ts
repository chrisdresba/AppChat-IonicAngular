import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensaje.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/class/mensaje';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-sala-a',
  templateUrl: './sala-a.page.html',
  styleUrls: ['./sala-a.page.scss'],
})
export class SalaAPage implements OnInit {


  public usuario: any;
  public usuarioLog: string="";
  public listado: Array<any> = [];
  public listadoMensajes: Observable<Mensaje[]>;
  public mensaje: string = '';


  constructor(
    public authSrv: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    private toast: ToastController,
    public chat: MensajeService,
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.presentLoading();
    setTimeout(() => {
      this.traerMensajes();
      this.ordenarMensajes();
    }, 3000)
  }

  ngOnInit() {
    this.usuario = this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.usuario = user;
        this.usuarioLog = this.usuario.email;
      }
    })

    if(localStorage.getItem('usuario')){
      this.usuarioLog = localStorage.getItem('usuario');
    }

  }

  traerMensajes() {
    try {
      this.listadoMensajes = this.chat.chatsA;
    } catch (error) {
      console.log('error', error);
    }
  }

  ordenarMensajes() {
    this.listadoMensajes = this.listadoMensajes.pipe(
      map(docs => {
        return docs.sort((a?, b?) => (((a.fecha! > b.fecha!) || (a.fecha! == b.fecha! && a.referencia! > b.referencia!)) ? 1 : -1));
      })
    );
  }

  guardarMensaje() {
    this.chat.guardarMensajeA(this.usuarioLog, this.mensaje);
    setTimeout(() => {
      this.ordenarMensajes();
    }, 500)
    this.mensaje = '';
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Cargando...',
      duration: 3000,
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

  back() {
    this.router.navigate(["home"]);
  }

}
