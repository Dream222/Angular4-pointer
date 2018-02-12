import { UserService } from "./user.service";
import { TestBed } from "@angular/core/testing";

describe("UserService", () => {

  let service: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ]
    });
    service = TestBed.get(UserService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
