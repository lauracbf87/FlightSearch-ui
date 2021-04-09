import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
	@Input() departureLocation: string = "";
	@Input() arrivalLocation: string = "";
	@Input() flightDate: string = "";
	@Input() flightClass: string = "";
	@Input() outputPreference: string = "";
	@Output() onDepartureLocationChange = new EventEmitter<string>();
	@Output() onArrivalLocationChange = new EventEmitter<string>(); 
	@Output() onFlightDateChange = new EventEmitter<string>(); 
	@Output() onFlightClassChange = new EventEmitter<string>(); 
	@Output() onOutputPreferenceChange = new EventEmitter<string>(); 

	constructor() { }

	ngOnInit(): void {
	}

	onValueChanged(event: any, controlName: string): void {
		console.log([event, controlName]);
		let value = event.target.value;
		if (controlName === "depLoc") {
			this.onDepartureLocationChange.emit(value);
		} else if (controlName === "arrLoc") {
			this.onArrivalLocationChange.emit(value);
		} else if (controlName === "flightDt") {
			this.onFlightDateChange.emit(value);
		} else if (controlName == 'flightCls') {
			this.onFlightClassChange.emit(value);
		} else if (controlName == 'outputPref') {
			this.onOutputPreferenceChange.emit(value);
		}
	}

}
