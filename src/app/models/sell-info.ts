import { Media, LocationInfo, PriceInfo, UserNormalInfo, ServiceInfo } from "./common-info";

export class SellInfo {
    constructor(
        public buyer: UserNormalInfo = new UserNormalInfo(),
        public service: BuyServiceInfo = new BuyServiceInfo(),
        public order: OrderInfo = new OrderInfo()
    ) {}
}

export class BuyServiceInfo {
    constructor(
        public id: string = '',
        public description: string = '',
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date(),
        public media: Media = new Media()
    ) {}
}

export class OrderInfo {
    constructor(
        public paymentDate: Date = new Date(),
        public orderMilestoneStatuses: OrderStatusInfo = new OrderStatusInfo(),
        public serviceLocation: LocationInfo = new LocationInfo()
    ) {}
}

export class OrderStatusInfo {
    constructor(
        public paid: boolean = true,
        public paidDate: Date = new Date(),
        public _id: string = ''
    ) {}
}