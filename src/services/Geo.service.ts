import {IPoint} from '../interfaces/Point.interface';

export default class GeoService {
    readonly earthRadiusKM = 6371;

    public calculateDistance(pointOne: IPoint, pointTwo: IPoint): number {
        const deltaLat = this.degreeToRadian(pointTwo.lat - pointOne.lat)
        const deltaLon = this.degreeToRadian(pointTwo.lon - pointOne.lon)

        const pointOneRadianLat = this.degreeToRadian(pointOne.lat)
        const pointTwoRadianLat = this.degreeToRadian(pointTwo.lat)

        const a = Math.pow(Math.sin(deltaLat / 2), 2) +
            Math.pow(Math.sin(deltaLon / 2), 2) *
            Math.cos(pointOneRadianLat) * Math.cos(pointTwoRadianLat);
        const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return parseFloat((this.earthRadiusKM * b).toFixed(2));
    }

    private degreeToRadian(degree: number) {
        return (degree * Math.PI) / 180;
    }
}
