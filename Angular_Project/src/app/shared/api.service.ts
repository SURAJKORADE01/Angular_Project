import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, retry} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;

  addRestaurent(restaurentModelObj: RestaurentData) 
  {
    return this._http.post<any>("http://localhost:3000/posts", restaurentModelObj).pipe(map((res:any)=>{
      return res;
    }))
  }

  constructor(private _http: HttpClient) { }

  //POST request
  postRestaurent(data:any) 
  {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  postSignUp(data : any)
  {
    return this._http.post<any>("http://localhost:3000/signup", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //GET request
  getRestaurent() 
  {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }

  //delete request
  deleteRestaurant(id:string) 
  {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }

  //update request
  updateRestaurant(id: string, data: any) 
  {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }
}
