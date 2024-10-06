import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  createUser(model: any): Observable<any> {
    const url = `${environment.hrManagementSystemAPIUrl}/Account/CreateUser`;
    return this.http.post<any>(url, model, this.httpOptions).pipe(
      tap((_) => console.log("createUser called")),
      map((response) => {
        if (response.statusCode === 200) {
          return response;
        } else {
          throw new Error("Unsuccessful status code received");
        }
      }),
      catchError(this.handleError<any>("createUser"))
    );
  }

  login(model: any): Observable<any> {
    const url = `${environment.hrManagementSystemAPIUrl}/Account/Login`;
    return this.http.post<any>(url, model, this.httpOptions).pipe(
      map((response) => {
      
        return response;
      }),
      catchError((err) => {
        console.log("error caught in service");
        console.error(err);
        return throwError(err); // Rethrow it back to component
      })
    );
  }

  
  isTokenValid(token: string | null): boolean {
    if (!token) {
      return false;
    }
    const tokenPayload = this.decodeToken(token);
    const currentTime = Math.floor(Date.now() / 1000);  // Current time in seconds
    return tokenPayload && tokenPayload.exp > currentTime;
  }
  decodeToken(token: string) {
    try {
      const payload = atob(token.split('.')[1]);
      return JSON.parse(payload);
    } catch (error) {
      console.error('Invalid token');
      return null;
    }
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // Log the error somewhere
      console.error(`${operation} failed: ${error.message}`);

      // Transform the error into an observable
      return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
  }
}








