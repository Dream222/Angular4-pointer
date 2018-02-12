import { Media, LocationInfo } from "./common-info";

export class AddServiceInfo {
    constructor(
        public category: ServiceCategory = new ServiceCategory(),
        public description: string = '',
        public fulfillmentMethod: ServiceFulfillmentMethod = new ServiceFulfillmentMethod(),
        public location: Array<LocationInfo> = [new LocationInfo()],
        public media: Array<Media> = [new Media()],
        public pricing: ServicePrice = new ServicePrice()
    ) {}
}

export class ServiceCategory {
    constructor(
        public id: number = 0,
        public name: string = ''
    ) {}
}

export class ServiceFulfillmentMethod {
    constructor(
        public local: boolean = false,
        public online: boolean = false,
        public shipment: boolean = false,
        public store: boolean = false
    ) {}
}

export class ServicePrice {
    constructor(
        public description: string = '',
        public price: number = 0,
        public time: string = '',
        public timeUnitOfMeasure: string = ''
    ) {}
}