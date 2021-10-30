import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  user: firebase.User;
  isLogged: boolean = false;

  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState;

    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }

  // creating user
  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  // logging in with email and password
  loginWithEmail(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  // logging in with google account
  loginWithGoogle() {
    return this.afa.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  // logging out from user
  logout() {
    return this.afa.signOut();
  }
}
