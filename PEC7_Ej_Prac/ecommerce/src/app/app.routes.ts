import { Routes } from '@angular/router';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'react', component: ArticleNewReactiveComponent, canActivate: [authGuardGuard] },
  { path: 'article-detail/:id', component: ArticleDetailComponent },
];

//https://a.jpg
