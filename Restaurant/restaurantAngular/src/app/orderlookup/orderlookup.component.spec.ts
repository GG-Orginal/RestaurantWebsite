import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlookupComponent } from './orderlookup.component';

describe('OrderlookupComponent', () => {
  let component: OrderlookupComponent;
  let fixture: ComponentFixture<OrderlookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
