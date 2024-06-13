import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

export const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'react', component: ArticleNewReactiveComponent },
];

//https://a.jpg
