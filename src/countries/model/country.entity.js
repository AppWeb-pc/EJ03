export class Country {
    constructor(
        name = { common: '', official: '' },
        flags = { png: '', svg: '', alt: '' },
        currencies = {},
        capital = [],
        region = '',
        subregion = '',
        languages = {},
        area = 0,
        population = 0,
        coatOfArms = { png: '', svg: '' }
    ) {
        this.name = name;
        this.flags = flags;
        this.currencies = currencies;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.area = area;
        this.population = population;
        this.coatOfArms = coatOfArms;
    }
}