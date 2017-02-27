import { ICityWeather } from "./interfaces";

export class CUserWeatherCity {
    constructor(private weatherData: ICityWeather, private favorite: boolean) {}

    getFavorite = () => {
        return this.favorite;
    };

    setFavorite = (favorite: boolean): CUserWeatherCity => {
        const copy =  this.copy();

        copy.favorite = favorite;

        return copy;
    };

    private copy = (): CUserWeatherCity => {
        return new CUserWeatherCity(this.weatherData, this.favorite);
    };
}