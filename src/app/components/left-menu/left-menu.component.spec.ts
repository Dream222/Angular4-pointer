import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LeftMenuComponent } from "./left-menu.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LeftMenuComponent", () => {

  let fixture: ComponentFixture<LeftMenuComponent>;
  let component: LeftMenuComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LeftMenuComponent]
    });

    fixture = TestBed.createComponent(LeftMenuComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
