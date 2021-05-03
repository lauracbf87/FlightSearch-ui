import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'flight-search-ui';
	resultsData: any[] = [];
	departureLocation: string = "";
	arrivalLocation: string = "";
	flightTime: string = "";
	flightDate: string = "";
	flightClass: string = "BB";
	outputPreference: string = "PDF";


	onDataFound(data: any) {
		console.log(data);
		this.resultsData = data;
	}

	doDepartureLocationChange(value: any) {
		console.log(value);
		this.departureLocation = value;
	}

	doArrivalLocationChange(value: any) {
		console.log(value);
		this.arrivalLocation = value;
	}

	doFlightTimeChange(value: any) {
		console.log(value);
		this.flightTime = value;
	}

	doFlightDateChange(value: any) {
		console.log(value);
		this.flightDate = value;
	}

	doFlightClassChange(value: any) {
		console.log(value);
		this.flightClass = value;
	}

	doOutputPreferenceChange(value: any) {
		console.log(value);
		this.outputPreference = value;
	}
}
