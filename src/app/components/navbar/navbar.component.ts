import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {}
}
