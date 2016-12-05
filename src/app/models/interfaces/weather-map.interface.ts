export interface ICoord {
    lon: number;
    lat: number;
}

export interface IMain {
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

export interface IList {
    id: number;
    name: string;
    coord: ICoord;
    main: IMain;
    dt: number;
    wind: IWind;
    sys: ISys;
    clouds: IClouds;
    weather: IWeather[];
}

export interface IWeatherMap {
    message: string;
    cod: string;
    count: number;
    list: IList[];
}
