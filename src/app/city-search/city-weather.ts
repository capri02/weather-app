export class CityWeather {
    constructor(
        public name: string,
        public country: string,
        public temperature: any,
        public weather_code: number,
        public icon: string = ''
    ) {
        if(!icon) {
            this.mapWeatherIcons(this.weather_code)
        }
     }

    private weatherIcons: object = {
        'iconCode': {
            395: 'W',
            392: 'V',
            389: '0',
            386: 'O',
            377: 'X',
            374: 'V',
            371: 'W',
            368: 'V',
            365: 'U',
            362: 'V',
            359: 'X',
            356: 'R',
            353: 'T',
            350: 'V',
            338: 'W',
            335: 'W',
            332: 'W',
            329: 'W',
            326: 'U',
            323: 'V',
            320: 'U',
            317: 'V',
            314: 'V',
            311: 'V',
            308: 'R',
            305: 'R',
            302: 'R',
            299: 'R',
            296: 'R',
            293: 'T',
            284: 'U',
            281: 'U',
            266: 'Q',
            263: 'T',
            260: 'L',
            248: 'M',
            230: 'W',
            227: 'U',
            200: 'P',
            185: 'U',
            182: 'U',
            179: 'V',
            176: 'Q',
            143: 'L',
            122: 'N',
            119: 'N',
            116: 'H',
            113: 'B',
        }
    }

    mapWeatherIcons(weatherCode: number) {
        this.icon = this.weatherIcons['iconCode'][weatherCode];
    }
}