import { Component, OnInit } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
import { Article } from '../../articles.module';
import { ArticleService } from '../../services/article-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule, FormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  searchTerm: string = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  onSearch(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    if (this.searchTerm.trim() === '') {
      // Si el término de búsqueda está vacío, cargar todos los artículos
      this.articleService.getAllArticles().subscribe((articles) => {
        this.articles = articles;
      });
    } else {
      // Si hay un término de búsqueda, cargar artículos según el término
      this.articleService.getArticles(this.searchTerm).subscribe((articles) => {
        this.articles = articles;
      });
    }
  }

  onAddQuantity(article: Article): void {
    this.articleService
      .changeQuantity(article.id, 1)
      .subscribe((newArticle) => {
        this.updateArticleInList(newArticle);
      });
  }

  onRemoveQuantity(article: Article): void {
    this.articleService
      .changeQuantity(article.id, -1)
      .subscribe((newArticle) => {
        this.updateArticleInList(newArticle);
      });
  }

  onQuantityChange(quantityChange: {
    article: Article;
    changeInQuantity: number;
  }): void {
    this.articleService
      .changeQuantity(
        quantityChange.article.id,
        quantityChange.changeInQuantity
      )
      .subscribe((newArticle) => {
        this.updateArticleInList(newArticle);
      });
  }

  private updateArticleInList(newArticle: Article): void {
    const index = this.articles.findIndex((a) => a.id === newArticle.id);
    if (index !== -1) {
      this.articles[index] = newArticle;
    }
  }
}
