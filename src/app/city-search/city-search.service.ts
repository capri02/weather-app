import { Injectable } from '@angular/core';
import { ICity } from './cities';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  private cityListJson = './cities/citylist.json';
  constructor(private http: HttpClient) { }

  getCities(): Observable<ICity[]> {
    return this.http.get<ICity[]>(this.cityListJson).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}