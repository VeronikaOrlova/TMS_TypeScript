// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//
//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алфавитном порядке.
//     6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

interface ICountry {
        country: string,
        abbreviation: string,
        city: string,
        currency_name: string,
        population: number
}

const countries: ICountry[] = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959

    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
]
 
//1

function getStringFromCountry(countries: ICountry[]): string {
    return countries.map((countries) => countries.country).join(', ')
  }
  
  console.log(getStringFromCountry(countries))
  
//2  

  function getAllPeople(countries: ICountry[]): number {
    let sumPeople: number = 0;
    countries.forEach(el => sumPeople += el.population)
    return sumPeople
  }
  
  console.log(getAllPeople(countries))

//3

  function sortCountries (countries: ICountry[]): ICountry[] {
    return countries.map((el) => el.country).sort()
  }

  console.log(sortCountries(countries))

  
//4

  function getCurrencies (countries: ICountry[]): ICountry[] {
    return countries.map((el) => el.currency_name)
  }

 console.log(getCurrencies (countries))

  
//5

  function sortCities (countries: ICountry[]): ICountry[]  {
    return countries.map((el) => el.city).sort()
  }

 console.log(sortCities(countries))

  
//6

  function getAveragePeople(countries: ICountry[]): number {
    return countries.reduce((acc: number, el): number => 
    Math.round(acc + el.population / countries.length), 0)
  }
    
  console.log(getAveragePeople(countries))