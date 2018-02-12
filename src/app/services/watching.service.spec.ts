import { WatchingService } from "./watching.service";
import { TestBed } from "@angular/core/testing";

describe("WatchingService", () => {

  let service: WatchingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WatchingService
      ]
    });
    service = TestBed.get(WatchingService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
