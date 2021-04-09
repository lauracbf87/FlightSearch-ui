import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'flight-search-ui';
	resultsData: any[] = [];
	departureLocation: string = "HOLA";
	arrivalLocation: string = "mundito";
	flightDate: string = "08-04-2021";
	flightClass: string = "BB";
	outputPreference: string = "PDF";


	onDataFound(data: any) {
		console.log(data);
		this.resultsData = data;
	}

	onDepartureLocationChange(value: string) {
		console.log(value);
		this.departureLocation = value;
	}
}
