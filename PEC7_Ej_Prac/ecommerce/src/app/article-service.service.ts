import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { Article } from './articles.module';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(query?: string): Observable<Article[]> {
    console.log(query)
    const url = query ? `${this.apiUrl}?q=${query}` : this.apiUrl;
    return this.http.get<Article[]>(url);
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  changeQuantity(
    articleID: number,
    changeInQuantity: number
  ): Observable<Article> {
    const url = `${this.apiUrl}/${articleID}`;
    return this.http.patch<Article>(url, { changeInQuantity });
  }

  updateArticle(newArticle: Article): Observable<Article> {
    const url = `${this.apiUrl}/${newArticle.id}`;
    return this.http.put<Article>(url, newArticle);
  }

  generateArticleId(): Observable<number> {
    return this.getArticles().pipe(
      map((articles: Article[]) => {
        let newArticleID: number;
        do {
          newArticleID = Math.floor(Math.random() * 1000000); // Generate a random ID
        } while (articles.find((a: Article) => a.id === newArticleID)); // Continue generating until you get a unique ID
        return newArticleID;
      })
    );
  }
}
export function NameArticleValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
  const isForbiddenName = forbiddenNames.includes(control.value);
  return isForbiddenName ? { forbiddenName: { value: control.value } } : null;
}
