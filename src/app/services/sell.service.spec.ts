import { SellService } from "./sell.service";
import { TestBed } from "@angular/core/testing";

describe("SellService", () => {

  let service: SellService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SellService
      ]
    });
    service = TestBed.get(SellService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
