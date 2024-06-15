import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ArticleDetailComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class ArticleModule {}
