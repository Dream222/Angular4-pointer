import { Media, LocationInfo, PriceInfo, UserNormalInfo, ServiceInfo } from "./common-info";

export class WatchingInfo {
    constructor(
        public service: ServiceInfo = new ServiceInfo(),
        public user: UserNormalInfo = new UserNormalInfo(),
        public numOrders: number = 0,
        public avgRating: number = 0,
        public ratingCount: number = 0,
        public pointValue: number = 0
    ) {}
}

