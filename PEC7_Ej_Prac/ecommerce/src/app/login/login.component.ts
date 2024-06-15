import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username ?? '';
      const password = this.loginForm.value.password ?? '';

      this.authService.login(username, password).subscribe({
        next: (response) => {
          if (response && response.token) {
            localStorage.setItem('authToken', response.token);
            console.log('Inicio de sesión exitoso!');
          } else {
            console.log(
              'La respuesta del servidor no contiene un token de autenticación.'
            );
          }
        },
        error: (error) => {
          console.error('Error durante el inicio de sesión:', error);
        },
      });
    }
  }
}
