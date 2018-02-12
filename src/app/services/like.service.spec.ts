import { LikeService } from "./like.service";
import { TestBed } from "@angular/core/testing";

describe("LikeService", () => {

  let service: LikeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LikeService
      ]
    });
    service = TestBed.get(LikeService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
