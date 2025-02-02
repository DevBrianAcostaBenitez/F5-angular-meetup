import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getDogImages(count: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds/image/random/${count}`);
  }
}
