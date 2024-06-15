import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    RegisterComponent,
    LoginComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
