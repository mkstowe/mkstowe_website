import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  constructor(private httpClient: HttpClient) {}

  key = "PPMj8i7ZaHpuYo-O174cIfZ6Zok5iYlVNlmzZF8Zh4Q";
  topics = 'wallpapers,arts-culture,history,interiors,architecture,nature'
  query = 'indoor-plant'
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/random/?query=${this.query}&orientation=squarish&client_id=${this.key}`
    );
  }
}
