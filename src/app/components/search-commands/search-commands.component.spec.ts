import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommandsComponent } from './search-commands.component';

describe('SearchCommandsComponent', () => {
  let component: SearchCommandsComponent;
  let fixture: ComponentFixture<SearchCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
