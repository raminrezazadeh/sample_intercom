import GeoService from '../src/services/Geo.service';
import {IPoint} from '../src/interfaces/Point.interface';

describe('GEO Service', () => {
    it('Calculate distance', async () => {
        const pointOne: IPoint = {
            lat: 51.5,
            lon: 0,
        };

        const pointTwo: IPoint = {
            lat: 38.8,
            lon: -77.1,
        };

        const distance = new GeoService().calculateDistance(pointOne, pointTwo);
        expect(distance).toEqual(5918.19);
    });
});
