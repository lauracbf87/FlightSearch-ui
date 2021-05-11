import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightSearchServiceService } from '../../services/flight-search-service.service';
  

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
	@Input() departureLocation: string;
	@Input() arrivalLocation: string;
	@Input() flightTime: string;
	@Input() flightDate: string;
	@Input() flightClass: string;
	@Input() outputPreference: string;
	@Output() onDepartureLocationChange = new EventEmitter<string>();
	@Output() onArrivalLocationChange = new EventEmitter<string>(); 
	@Output() onFlightTimeChange = new EventEmitter<string>(); 
	@Output() onFlightDateChange = new EventEmitter<string>(); 
	@Output() onFlightClassChange = new EventEmitter<string>(); 
	@Output() onOutputPreferenceChange = new EventEmitter<string>(); 
	suggestions: string[] = [];


	constructor(private searchService: FlightSearchServiceService) {
		this.departureLocation = "";
		this.arrivalLocation = "";
		this.flightTime = "";
		this.flightDate = "";
		this.flightClass = "";
		this.outputPreference = "";
	 }

	ngOnInit(): void {
		     
	}

	doDepLocValueChanged(event: any): void {
		console.log(event);
		let value = event.target.value;
		
		this.onDepartureLocationChange.emit(value);
	}

	doArrLocValueChanged(event: any): void {
		console.log(event);
		let value = event.target.value;
		this.onArrivalLocationChange.emit(value);
	}

	doFlightTimeValueChanged(event: any): void {
		console.log(event);
		let value = event.target.value;
		this.onFlightTimeChange.emit(value);
	}

	doFlightDtValueChanged(event: any): void { 
		console.log(event);
		let value = event.target.value;
		this.onFlightDateChange.emit(value);

	}  
	
	doFlightClsValueChanged(event: any): void {
		console.log(event);
		let value = event.target.value;
		this.onFlightClassChange.emit(value);
	}

	doOutputPrefValueChanged(event: any): void {
		console.log(event);
		let value = event.target.value;
		this.onOutputPreferenceChange.emit(value);
	}

	doOnInputText(event: any): void {
		console.log(event);
		let text = event.target.value;
		this.searchService.findByText(text)
			.subscribe((resp) => {
				console.log(resp);
				let selections: any = {};
				resp.map((item) => { 
					selections[item.depLoc] = item.depLoc;
					return null;
				});
				this.suggestions = Object.keys(selections);
			});
	}

	selectItem(value: any): void {
		console.log(value);
		this.departureLocation = value;
	}

}
