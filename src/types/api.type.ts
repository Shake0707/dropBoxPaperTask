export enum EApi {
    api = "https://restcountries.com/v3.1/"
}

interface IName {
    common: string;
    official: string;
}

interface IFlags {
    png: string;
    svg: string;
    alt: string;
}

interface ICoatOfArms {
    png: string;
    svg: string;
}

interface IMaps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface IData {
    name: IName;
    flags: IFlags;
    region: string;
    subregion: string;
    coatOfArms: ICoatOfArms;
    capital: string[];
    maps: IMaps;
}