import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = 'http://localhost:3000';

  getDataWithAjax(): Observable<any> {
    const url = this.apiUrl + '/posts';
    return ajax.getJSON(url).pipe(
      map((data: any) => {
        if (data.length > 0) {
          data.map((eachData: any) => {
            eachData.author = eachData.author.toUpperCase();
            return eachData;
          })
        }
        return data;
      })
    );
  }
}
