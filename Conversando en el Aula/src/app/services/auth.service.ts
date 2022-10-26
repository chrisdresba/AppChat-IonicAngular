import { Injectable, NgZone } from '@angular/core';
//import { auth } from 'firebase/app/';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../shared/clases/user'
//import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { filter, first, map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.user$ = this.ngFireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afStore.doc(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }


  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["login"]);
    });
  }

  getCurrentUserId(): Observable<any> {
    return this.ngFireAuth.authState.pipe(first());
  }

}
