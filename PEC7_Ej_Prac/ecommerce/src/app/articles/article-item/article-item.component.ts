import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../articles.module';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe,RouterModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article = {
    id: 0,
    name: '',
    imageUrl: '',
    price: 0,
    isOnSale: false,
    quantityInCart: 0,
  };

  @Output() quantityChange = new EventEmitter<{
    article: Article;
    changeInQuantity: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddQuantity(): void {
    this.quantityChange.emit({ article: this.article, changeInQuantity: 1 });
  }

  onRemoveQuantity(): void {
    this.quantityChange.emit({ article: this.article, changeInQuantity: -1 });
  }
}
