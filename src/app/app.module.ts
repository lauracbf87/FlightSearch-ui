import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchCommandsComponent } from './components/search-commands/search-commands.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';
import { FlightSearchServiceService } from './services/flight-search-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchCommandsComponent,
    SearchResultsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
