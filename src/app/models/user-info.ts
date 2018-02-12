import { Media, LocationInfo, ServiceInfo } from "./common-info";

export class UserInfo {
    constructor(
        public _id: string = '',
        public email: string = '',
        public location: LocationInfo = new LocationInfo(),
        public companyName: string = '',
        public CompletedRegistrationDate: Date = new Date(),
        public firstName: string = '',
        public lastName: string = '',
        public profilePic: string = '',
        public verified: boolean = true,
        public description: string = '',
        public phone: number = 0,
        public settings: Setting = new Setting(),
        public profileBackgroundMedia: Array<Media> = [new Media()],
        public isEmail: EmailValid = new EmailValid(),
        public isAdmin: boolean = false,
        public isActive: boolean = true,
        public completedRegistration: boolean = false
    ) {}
}

export class Setting {
    constructor(
        public phoneViewPermission: string = '',
        public locationViewPermission: string = '',
        public summaryEmail: string = '',
        public offerNotifications: string = '',
        public orderNotifications: string = '',
        public generalNotifications: string = ''
    ) {}
}

export class EmailValid {
    constructor(
        public invalid: boolean = false,
        public spam: boolean = false,
        public bounced: boolean = false,
        public valid: boolean = true,
    ) {}
}


export class UserServiceInfo {
    constructor(
        public service: ServiceInfo = new ServiceInfo(),
        public numOrders: number = 0,
        public avgRating: number = 0,
        public pointValue: number = 0
    ) {}
}
