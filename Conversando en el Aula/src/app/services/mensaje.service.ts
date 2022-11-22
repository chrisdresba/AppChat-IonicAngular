import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mensaje } from '../class/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  public chatsA: Observable<any[]>;
  public chatsB: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
      this.chatsA = this.firestore.collection('sala-a').valueChanges();
      this.chatsB = this.firestore.collection('sala-b').valueChanges();
  }

  async guardarMensajeA(usuario: any, mensaje: any) {
    let fecha = new Date();
    let dia = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
    let hora = fecha.getHours() + ':' + this.revision(fecha.getMinutes()) + ':' + this.revision(fecha.getSeconds());
    let referencia = (fecha.getHours() * 3600) + (fecha.getMinutes() * 60) + fecha.getSeconds();
    let texto = { 'usuario': usuario, 'fecha': dia, 'hora': hora, 'mensaje': mensaje, 'referencia': referencia }
    return await this.firestore.collection('sala-a').add(texto);
  }

  async guardarMensajeB(usuario: any, mensaje: any) {
    let fecha = new Date();
    let dia = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
    let hora = fecha.getHours() + ':' + this.revision(fecha.getMinutes()) + ':' + this.revision(fecha.getSeconds());
    let referencia = (fecha.getHours() * 3600) + (fecha.getMinutes() * 60) + fecha.getSeconds();
    let texto = { 'usuario': usuario, 'fecha': dia, 'hora': hora, 'mensaje': mensaje, 'referencia': referencia }
    return await this.firestore.collection('sala-b').add(texto);
  }


  getMensajesA = (): Observable<any[]> => {
    return this.firestore.collection('sala-a').snapshotChanges().pipe(
      map(docs => {
        return docs.map(d => d.payload.doc.data()) as Mensaje[];
      })
    );
  }

  getMensajesB = (): Observable<any[]> => {
    return this.firestore.collection('sala-b').snapshotChanges().pipe(
      map(docs => {
        return docs.map(d => d.payload.doc.data()) as Mensaje[];
      })
    );
  }


  revision(dato: any) {
    if (dato < 10) {
      return ('0' + dato);
    }
    return dato;
  }
}
