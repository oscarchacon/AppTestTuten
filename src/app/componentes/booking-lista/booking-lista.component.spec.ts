import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListaComponent } from './booking-lista.component';

describe('BookingListaComponent', () => {
  let component: BookingListaComponent;
  let fixture: ComponentFixture<BookingListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
