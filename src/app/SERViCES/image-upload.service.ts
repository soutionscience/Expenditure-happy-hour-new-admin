import { Injectable } from '@angular/core';

import { HttpHandler, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  
  public uploadImage(image: File): Observable<any>{
    const formData = new FormData;
    formData.append('image', image);
    return this.http.post('http://localhost:3000/api/images-upload', formData)
  }
}
