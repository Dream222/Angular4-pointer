export class Media {
    constructor(
        public fileName: string = '123.jpg',
        public mediaType: string = 'image'
    ) {}
}

export class LocationInfo {
    constructor(
        public _id: string = '',
        public city: string = 'Chicago',
        public country: string = 'US',
        public geoJson: LocationInfoGeoJson = new LocationInfoGeoJson(),
        public postalCode: string = '12345',
        public province: string = '33',
        public state: string = 'IL'
    ) {}
}

export class LocationInfoGeoJson {
    constructor(
        public type: string = 'Point',
        public coordinates: Array<number> = [-73.856077, 40.848447]
    ) {}
}

export class UserNormalInfo {
    constructor(
        public id: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public profilePic: string = ''
    ) {}
}

export class PriceInfo {
    constructor(
        public _id: string = '',
        public description: string = '',
        public price: number = 0,
        public time: number = 0,
        public timeUnitOfMeasure: string = ''
    ) {}
}

export class ServiceInfo {
    constructor(
        public id: string = '',
        public description: string = '',
        public media: Media = new Media(),
        public location: Array<LocationInfo> = [new LocationInfo()],
        public prices: PriceInfo = new PriceInfo()
    ) {}
}