import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'react', component: ArticleNewReactiveComponent },
  { path: 'article-detail/:id', component: ArticleDetailComponent },
];

//https://a.jpg
