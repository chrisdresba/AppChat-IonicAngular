import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import {BalanceUsuarios} from '../shared/clases/balanceUsuarios';
import { Creditos } from '../class/creditos';


@Injectable({
  providedIn: 'root'
})
export class CreditosService {

 public listado:Observable<any[]>;
 public creditosUsuario:Creditos;

  constructor(private firestore: AngularFirestore) {
    this.listado = this.firestore
      .collection('creditos')
      .valueChanges();
    
  }

  getCreditos = (): Observable<any[]> => {
    return this.firestore.collection('creditos').snapshotChanges().pipe(
      map(docs => {
        return docs.map(d => d.payload.doc.data()) as Creditos[];
      })
    );
  }

  getCreditoUsuario ( usuario? : any ) {
    return this.firestore.collection('creditos').ref.where( "usuario", "==", usuario ).get().then( snapshots => snapshots.docs.map( doc => {
      const ret : any = doc.data();
      ret.id = doc.id;
      return ret;
    } ) ); 
     /* for (let i = 0; i < this.listado.length; i++) {
        if (this.listado[i].usuario == usuario) {
          return this.listado[i];
        }
      }*/
  }

  async actualizarCredito ( res: Creditos ) {
    return await this.firestore.collection('creditos').doc(res.id).update ( {...res} );
  }

  /*
  getCreditosId(uid: string) {
    return this.listado.doc<BalanceUsuarios>(uid).valueChanges({idField: 'doc_id'});
  }
  updateDatabase(id: string, value: any) {
    return this.dbRef.doc(id).update(value);
  }*/

}
