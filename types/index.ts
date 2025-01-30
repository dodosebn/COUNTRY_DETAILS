export interface ForAllProps {
    name: string;
    topLevelDomain: string[];
    callingCodes: string[];
    capital: string;
    subregion: string;
    region: string;
    population: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    flags: {
        svg: string;
        png: string;
    };
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    flag: string;

}
export interface mainPP {
    countryData: ForAllProps | null;

}
export interface MainProps {
    countryData: ForAllProps | null;
    setCountryData: React.Dispatch<React.SetStateAction<ForAllProps | null>>;
    jsonData: ForAllProps[];
    txtVal: string;
}

export interface HomePageProps{
    // countryData: ForAllProps | null;
    setCountryData: React.Dispatch<React.SetStateAction<ForAllProps | null>>;
    jsonData: ForAllProps[];
    txtVal: string;
    region: string;
    setRegion: React.Dispatch<React.SetStateAction<string>>;
  setTxtVal: React.Dispatch<React.SetStateAction<string>>;
  countryData: ForAllProps | null;

}
export interface FirstPageProps {
    jsonData: ForAllProps[];
    // countryData: ForAllProps | null;
    // idCountry:string;
    setCountryData: React.Dispatch<React.SetStateAction<ForAllProps | null>>;
}
export interface InputaProps {
  txtVal: string;
  setTxtVal: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}
export type RegionProps = string[];

export interface ConstTopProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

  