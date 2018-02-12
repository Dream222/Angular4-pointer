import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServiceDetailComponent } from "./service-detail.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ServiceDetailComponent", () => {

  let fixture: ComponentFixture<ServiceDetailComponent>;
  let component: ServiceDetailComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ServiceDetailComponent]
    });

    fixture = TestBed.createComponent(ServiceDetailComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
