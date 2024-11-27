import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";


@Injectable({
  providedIn: "root",
})
export class TasksService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    const url = `${environment.hrManagementSystemAPIUrl}/Tasks/GetTasks`;
    return this.http.get<any[]>(url, this.httpOptions).pipe(
      tap((_) => console.log("getTasks called")),
      catchError(this.handleError<any[]>("getTasks", []))
    );
  }

  saveTask(model: any): Observable<any> {
    debugger;
    const url = `${environment.hrManagementSystemAPIUrl}/Tasks/CreateTask`;
    return this.http.post<any>(url, model, this.httpOptions).pipe(
      tap((_) => console.log("saveTask called")),
      map((response) => {
        if (response.statusCode === 200) {
          return response;
        } else {
          throw new Error("Unsuccessful status code received");
        }
      }),
      catchError(this.handleError<any>("saveTask"))
    );
  }
  
  getDashboardInfo(encUserId?: number): Observable<any> {    
    const url = `${environment.hrManagementSystemAPIUrl}/Account/GetUserInfoById?encUserId=${encUserId}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
        tap((_) => console.log("getDashboardInfo called")),
        map((response) => {
            if(response){
                return response;
            }
            // if (response.statusCode === 200) {
            //     return response;
            // } else {
            //     throw new Error("Unsuccessful status code received");
            // }
        }),
        catchError(this.handleError<any>("getDashboardInfo"))
    );
}

private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);

        return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
}
}