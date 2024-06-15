import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article-service.service';
import { Article } from '../articles.module';
@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
})
export class ArticleDetailComponent implements OnInit {
  id?: string;
  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? 0;
    this.getArticle();
  }

  getArticle(): void {
    this.articleService
      .getArticle(this.id)
      .subscribe((article) => (this.article = article));
  }
}
