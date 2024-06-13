import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ArticleService,
  NameArticleValidator,
} from '../article-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css',
})
export class ArticleNewReactiveComponent {
  article: FormGroup = this.fb.group({});
  submitted = false;
  formError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private snackBar: MatSnackBar
  ) {
    this.articleService.generateArticleId().subscribe((newArticleID) => {
      this.article = this.fb.group({
        articleID: newArticleID,
        name: [
          '',
          [Validators.required, Validators.minLength(3), NameArticleValidator],
        ],
        price: ['', [Validators.required, Validators.min(0.1)]],
        imageUrl: [
          '',
          [
            Validators.required,
            Validators.pattern('(https?://.*.(?:png|jpg))'),
          ],
        ],
        isOnSale: [false],
        quantityInCart: [0],
      });
    });
  }

  get name() {
    return this.article.get('name');
  }

  get price() {
    return this.article.get('price');
  }

  get imageUrl() {
    return this.article.get('imageUrl');
  }

  onSubmit() {
    this.submitted = true;
    if (this.article.valid) {
      console.log(this.article.value);
      this.formError = null;
      this.articleService.create(this.article.value);
      this.snackBar.open('Artículo creado', 'Cerrar', {
        duration: 2000,
      });
    } else {
      if (this.name && this.name.errors && this.name.errors['forbiddenName']) {
        this.formError =
          'El nombre del artículo no puede ser Prueba, Test, Mock, o Fake.';
      } else {
        this.formError = 'Por favor, corrija los errores en el formulario.';
      }
    }
  }
}
