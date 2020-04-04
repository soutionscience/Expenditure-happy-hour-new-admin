import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private restangular: Restangular) { }

  getResource(apiRoute): Observable<any[]>{
    return this.restangular.all(apiRoute).getList()
  }
  postResource(apiRoute, packages): Observable<any[]>{
    return this.restangular.all(apiRoute).post(packages)
  }
  deleteResource(apiRoute, id): Observable<any[]>{
    return this.restangular.one(apiRoute, id).remove()
  }
  getSpecificResource(apiRoute, id): Observable<any[]>{
    return this.restangular.one(apiRoute,id).get()
  }
  postSpecificResource(apiRoute, id, item, resource): Observable<any[]>{
    return this.restangular.one(apiRoute, id).all(item).post(resource)
  }
  postImage(apiRoute, image: File):Observable<any[]>{
    const formData= new FormData();
    formData.append('image', image);
    return this.restangular.one(apiRoute).post(formData)
  }
}
