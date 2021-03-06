import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Post[]>{
  return   this.httpClient.get<Post[]>(this.url);
  }
}
