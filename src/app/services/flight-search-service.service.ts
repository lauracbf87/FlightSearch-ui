import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FlightInfo } from './flight-info';
	
@Injectable({
	providedIn: 'root'
})
export class FlightSearchServiceService {
	private API_URL = "http://localhost:8000/";

	httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) { }

	searchBy(query: any): Observable<FlightInfo[]> {
		console.log({"searchBy": query});

		return this.http.post(this.API_URL + "flightSearch", query, {headers: this.httpHeaders})
			.pipe(
				map((res: any) => res || {}),
				catchError(this.errorHandler)
			);
	}

	findByText(text: string): Observable<FlightInfo[]> {
		console.log({"findByText": text});

		return this.http.post(this.API_URL + "findByText", {"textToFind":text}, {headers: this.httpHeaders})
			.pipe(
				map((res: any) => res || {}),
				catchError(this.errorHandler)
			);
	}

	errorHandler(error: any) {
		console.log(error);

		return throwError(error);
	}
}


