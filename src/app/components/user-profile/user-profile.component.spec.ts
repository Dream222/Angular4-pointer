import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UserProfileComponent } from "./user-profile.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UserProfileComponent", () => {

  let fixture: ComponentFixture<UserProfileComponent>;
  let component: UserProfileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UserProfileComponent]
    });

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
