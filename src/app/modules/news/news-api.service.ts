import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apikey = 'd6665a0b0575431f873ee9faa38aaf28';

  constructor(private http: HttpClient) { }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apikey);
 }
 initArticles(){
  return this.http.get('https://newsapi.org/v2/everything?q=flood-india&apiKey=' + this.apikey);
 }
 getArticlesByID(source: string){
  return this.http.get('https://newsapi.org/v2/everything?sources=' + source + '&apiKey=' + this.apikey);
 }
}
