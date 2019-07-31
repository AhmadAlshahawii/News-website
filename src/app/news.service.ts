
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private _Http:HttpClient) {
   }

   getNews(countryCode,categoryChoosen):Observable<any>
   {
     return this._Http.get("https://newsapi.org/v2/top-headlines?country="+countryCode+"&category="+categoryChoosen+"&apiKey=b95c589eeec54d0da2e07c11c8b96db2")
      
   }


}
