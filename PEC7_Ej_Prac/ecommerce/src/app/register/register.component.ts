import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;
      console.log(password);
      this.articleService.register(username).subscribe({
        next: (response) => {
          // Aquí puedes manejar la respuesta del servidor.
          console.log('Registro exitoso!', response);
        },
        error: (error) => {
          // Aquí puedes manejar el error.
          console.error('Error durante el registro:', error);
        },
      });
    }
  }
}
