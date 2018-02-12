import { BuyService } from "./buy.service";
import { TestBed } from "@angular/core/testing";

describe("BuyService", () => {

  let service: BuyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuyService
      ]
    });
    service = TestBed.get(BuyService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
