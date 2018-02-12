import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AddServiceComponent } from "./add-service.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AddServiceComponent", () => {

  let fixture: ComponentFixture<AddServiceComponent>;
  let component: AddServiceComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AddServiceComponent]
    });

    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
