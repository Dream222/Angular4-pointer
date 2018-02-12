import { NO_ERRORS_SCHEMA } from "@angular/core";
import { WatchingComponent } from "./watching.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("WatchingComponent", () => {

  let fixture: ComponentFixture<WatchingComponent>;
  let component: WatchingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [WatchingComponent]
    });

    fixture = TestBed.createComponent(WatchingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
