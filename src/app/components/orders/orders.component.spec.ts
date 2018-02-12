import { NO_ERRORS_SCHEMA } from "@angular/core";
import { OrdersComponent } from "./orders.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("OrdersComponent", () => {

  let fixture: ComponentFixture<OrdersComponent>;
  let component: OrdersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [OrdersComponent]
    });

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
