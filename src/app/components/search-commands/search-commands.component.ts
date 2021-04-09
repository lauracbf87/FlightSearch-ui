import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlightSearchServiceService } from '../../services/flight-search-service.service';
import { FlightInfo } from '../../services/flight-info';

@Component({
	selector: 'app-search-commands',
	templateUrl: './search-commands.component.html',
	styleUrls: ['./search-commands.component.css']
})
export class SearchCommandsComponent implements OnInit {
	@Input() departureLocation: string = "";
	@Input() arrivalLocation: string = "";
	@Input() flightDate: string = "";
	@Input() flightClass: string = "";
	@Input() outputPreference: string = "";
	@Output() dataFound = new EventEmitter<FlightInfo[]>();

	constructor(private searchService: FlightSearchServiceService) { }

	ngOnInit(): void {
	}

	onClickSearch(event: any): void {
		console.log(event);
		let request: any = {
			departureLocation: this.departureLocation,
			arrivalLocation: this.arrivalLocation,
			flightDate: this.flightDate,
			flightClass: this.flightClass,
			outputPreference: this.outputPreference
		};
		let results: FlightInfo[] = [];
		this.searchService.searchBy(request)
		.subscribe(response => {
			console.log(response);
			results = response;
			this.dataFound.emit(results);
		});
	}

}
