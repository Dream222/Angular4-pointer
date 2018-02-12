import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LikeComponent } from "./like.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LikeComponent", () => {

  let fixture: ComponentFixture<LikeComponent>;
  let component: LikeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LikeComponent]
    });

    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
