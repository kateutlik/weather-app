export interface ICoord {
    lon: number;
    lat: number;
}

export interface IMainWeather {
    temp: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}

export interface IWind {
    speed: number;
    deg: number;
    var_beg: number;
    var_end: number;
    gust: number;
}

export interface ISys {
    country: string;
}

export interface IClouds {
    all: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IWeatherList {
    id: number;
    name: string;
    coord: ICoord;
    main: IMainWeather;
    dt: number;
    wind: IWind;
    sys: ISys;
    clouds: IClouds;
    weather: IWeather[];
}

export interface ICityWeather {
    base: string;
    clouds: IClouds;
    cod: number;
    coord: ICoord;
    dt: number;
    id: number;
    main: IMainWeather;
    name: string;
    sys: ISys;
    weather: IWeather[];
    wind: IWind;
}

export interface IWeatherMap {
    message: string;
    cod: string;
    count: number;
    list: IWeatherList[];
}

export interface IUserWeatherCityForStorage {
    weatherData: ICityWeather,
    favorite: boolean
}