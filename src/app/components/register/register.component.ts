import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };
  error = '';

  // to submit the neu user form
  async onSubmit({ valid }: NgForm) {
    if (valid) {
      this.error = '';

      try {
        await this.authService.createUser(this.form.email, this.form.password);
        this.router.navigate(['/dashboard']);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
