import { ServiceService } from "./service.service";
import { TestBed } from "@angular/core/testing";

describe("ServiceService", () => {

  let service: ServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiceService
      ]
    });
    service = TestBed.get(ServiceService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
