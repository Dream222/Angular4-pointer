import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BuySellComponent } from "./buy-sell.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BuySellComponent", () => {

  let fixture: ComponentFixture<BuySellComponent>;
  let component: BuySellComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BuySellComponent]
    });

    fixture = TestBed.createComponent(BuySellComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
