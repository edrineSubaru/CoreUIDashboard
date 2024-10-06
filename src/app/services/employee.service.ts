import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: "root",
})
export class EmployeeInfoService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}
  getDashboardInfo(encUserId?: string): Observable<any> {
    const url = `${environment.hrManagementSystemAPIUrl}/Dashboard/GetDashboardInformationById?encUserId=${encUserId}`;
    return this.http.get<any>(url, this.httpOptions).pipe(
        tap((_) => console.log("getDashboardInfo called")),
        map((response) => {
            if (response.statusCode === 200) {
                return response;
            } else {
                throw new Error("Unsuccessful status code received");
            }
        }),
        catchError(this.handleError<any>("getDashboardInfo"))
    );
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