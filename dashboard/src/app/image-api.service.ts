import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { config } from "../config.js";

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  constructor(private httpClient: HttpClient) {}

  key = config.UNSPLASH_API_KEY;
  topics = 'wallpapers,arts-culture,history,interiors,architecture,nature'
  query = 'indoor-plant'
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/random/?query=${this.query}&orientation=squarish&client_id=${this.key}`
    );
  }
}
