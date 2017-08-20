import { InMemoryDbService, createErrorResponse, HttpMethodInterceptorArgs, createObservableResponse } from 'angular-in-memory-web-api';


export class InMemoryStoryService implements InMemoryDbService {
  // uncomment this function to force an error
  // protected get(interceptorArgs: HttpMethodInterceptorArgs) {
  //   let resp = createErrorResponse(500, 'this is a forced error from the in-memory api');
  //   return createObservableResponse(resp);
  // }

  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let courses = [
      {
        "id": 1,
        "name": "Building Apps with React",
        "topic": "ReactJS"
      },
      {
        "id": 2,
        "name": "Building Apps with Angular",
        "topic": "AngularJS"
      },
      {
        "id":3,
        "name": "Building Apps with Angular and Redux",
        "topic": "Angular and Redux"
      }
    ];

    let cars = [
        {
          "id": "abarth",
          "display": "Abarth",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "ac",
          "display": "AC",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "acura",
          "display": "Acura",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "alfa-romeo",
          "display": "Alfa Romeo",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "allard",
          "display": "Allard",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "alpina",
          "display": "Alpina",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "alpine",
          "display": "Alpine",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "alvis",
          "display": "Alvis",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "amc",
          "display": "AMC",
          "is_common": "0",
          "country": "USA"
        },
        {
          "id": "ariel",
          "display": "Ariel",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "armstrong-siddeley",
          "display": "Armstrong Siddeley",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "ascari",
          "display": "Ascari",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "aston-martin",
          "display": "Aston Martin",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "audi",
          "display": "Audi",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "austin",
          "display": "Austin",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "austin-healey",
          "display": "Austin-Healey",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "autobianchi",
          "display": "Autobianchi",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "auverland",
          "display": "Auverland",
          "is_common": "0",
          "country": "France"
        },
        {
          "id": "avanti",
          "display": "Avanti",
          "is_common": "0",
          "country": "USA"
        },
        {
          "id": "beijing",
          "display": "Beijing",
          "is_common": "0",
          "country": "China"
        },
        {
          "id": "bentley",
          "display": "Bentley",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "berkeley",
          "display": "Berkeley",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "bitter",
          "display": "Bitter",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "bizzarrini",
          "display": "Bizzarrini",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "bmw",
          "display": "BMW",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "brilliance",
          "display": "Brilliance",
          "is_common": "0",
          "country": "China"
        },
        {
          "id": "bristol",
          "display": "Bristol",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "bugatti",
          "display": "Bugatti",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "buick",
          "display": "Buick",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "cadillac",
          "display": "Cadillac",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "caterham",
          "display": "Caterham",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "checker",
          "display": "Checker",
          "is_common": "0",
          "country": "USA"
        },
        {
          "id": "chevrolet",
          "display": "Chevrolet",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "chrysler",
          "display": "Chrysler",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "citroen",
          "display": "Citroen",
          "is_common": "1",
          "country": "France"
        },
        {
          "id": "dacia",
          "display": "Dacia",
          "is_common": "1",
          "country": "Romania"
        },
        {
          "id": "daewoo",
          "display": "Daewoo",
          "is_common": "1",
          "country": "South Korea"
        },
        {
          "id": "daf",
          "display": "DAF",
          "is_common": "0",
          "country": "Netherlands"
        },
        {
          "id": "daihatsu",
          "display": "Daihatsu",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "daimler",
          "display": "Daimler",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "datsun",
          "display": "Datsun",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "de-tomaso",
          "display": "De Tomaso",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "dkw",
          "display": "DKW",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "dodge",
          "display": "Dodge",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "donkervoort",
          "display": "Donkervoort",
          "is_common": "0",
          "country": "Netherlands"
        },
        {
          "id": "eagle",
          "display": "Eagle",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "fairthorpe",
          "display": "Fairthorpe",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "ferrari",
          "display": "Ferrari",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "fiat",
          "display": "Fiat",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "fisker",
          "display": "Fisker",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "ford",
          "display": "Ford",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "gaz",
          "display": "GAZ",
          "is_common": "0",
          "country": "Russia"
        },
        {
          "id": "geely",
          "display": "Geely",
          "is_common": "0",
          "country": "China"
        },
        {
          "id": "ginetta",
          "display": "Ginetta",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "gmc",
          "display": "GMC",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "holden",
          "display": "Holden",
          "is_common": "1",
          "country": "Australia"
        },
        {
          "id": "honda",
          "display": "Honda",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "hudson",
          "display": "Hudson",
          "is_common": "0",
          "country": "USA"
        },
        {
          "id": "humber",
          "display": "Humber",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "hummer",
          "display": "Hummer",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "hyundai",
          "display": "Hyundai",
          "is_common": "1",
          "country": "South Korea"
        },
        {
          "id": "infiniti",
          "display": "Infiniti",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "innocenti",
          "display": "Innocenti",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "isuzu",
          "display": "Isuzu",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "italdesign",
          "display": "Italdesign",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "jaguar",
          "display": "Jaguar",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "jeep",
          "display": "Jeep",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "jensen",
          "display": "Jensen",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "kia",
          "display": "Kia",
          "is_common": "1",
          "country": "South Korea"
        },
        {
          "id": "koenigsegg",
          "display": "Koenigsegg",
          "is_common": "1",
          "country": "Sweden"
        },
        {
          "id": "lada",
          "display": "Lada",
          "is_common": "1",
          "country": "Russia"
        },
        {
          "id": "lamborghini",
          "display": "Lamborghini",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "lancia",
          "display": "Lancia",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "land-rover",
          "display": "Land Rover",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "lexus",
          "display": "Lexus",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "lincoln",
          "display": "Lincoln",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "lotec",
          "display": "Lotec",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "lotus",
          "display": "Lotus",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "luxgen",
          "display": "Luxgen",
          "is_common": "0",
          "country": "Taiwan"
        },
        {
          "id": "mahindra",
          "display": "Mahindra",
          "is_common": "0",
          "country": "India"
        },
        {
          "id": "marcos",
          "display": "Marcos",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "maserati",
          "display": "Maserati",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "matra-simca",
          "display": "Matra-Simca",
          "is_common": "0",
          "country": "France"
        },
        {
          "id": "maybach",
          "display": "Maybach",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "mazda",
          "display": "Mazda",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "mcc",
          "display": "MCC",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "mclaren",
          "display": "McLaren",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "mercedes-benz",
          "display": "Mercedes-Benz",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "mercury",
          "display": "Mercury",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "mg",
          "display": "MG",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "mini",
          "display": "Mini",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "mitsubishi",
          "display": "Mitsubishi",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "monteverdi",
          "display": "Monteverdi",
          "is_common": "0",
          "country": "Switzerland"
        },
        {
          "id": "moretti",
          "display": "Moretti",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "morgan",
          "display": "Morgan",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "morris",
          "display": "Morris",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "nissan",
          "display": "Nissan",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "noble",
          "display": "Noble",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "nsu",
          "display": "NSU",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "oldsmobile",
          "display": "Oldsmobile",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "opel",
          "display": "Opel",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "packard",
          "display": "Packard",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "pagani",
          "display": "Pagani",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "panoz",
          "display": "Panoz",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "peugeot",
          "display": "Peugeot",
          "is_common": "1",
          "country": "France"
        },
        {
          "id": "pininfarina",
          "display": "Pininfarina",
          "is_common": "0",
          "country": "Italy"
        },
        {
          "id": "plymouth",
          "display": "Plymouth",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "pontiac",
          "display": "Pontiac",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "porsche",
          "display": "Porsche",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "proton",
          "display": "Proton",
          "is_common": "0",
          "country": "Malaysia"
        },
        {
          "id": "reliant",
          "display": "Reliant",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "renault",
          "display": "Renault",
          "is_common": "1",
          "country": "France"
        },
        {
          "id": "riley",
          "display": "Riley",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "rolls-royce",
          "display": "Rolls-Royce",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "rover",
          "display": "Rover",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "saab",
          "display": "Saab",
          "is_common": "1",
          "country": "Sweden"
        },
        {
          "id": "saleen",
          "display": "Saleen",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "samsung",
          "display": "Samsung",
          "is_common": "0",
          "country": "South Korea"
        },
        {
          "id": "saturn",
          "display": "Saturn",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "scion",
          "display": "Scion",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "seat",
          "display": "Seat",
          "is_common": "1",
          "country": "Spain"
        },
        {
          "id": "simca",
          "display": "Simca",
          "is_common": "1",
          "country": "France"
        },
        {
          "id": "singer",
          "display": "Singer",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "skoda",
          "display": "Skoda",
          "is_common": "1",
          "country": "Czech Republic"
        },
        {
          "id": "smart",
          "display": "Smart",
          "is_common": "1",
          "country": "France"
        },
        {
          "id": "spyker",
          "display": "Spyker",
          "is_common": "1",
          "country": "Netherlands"
        },
        {
          "id": "ssangyong",
          "display": "SsangYong",
          "is_common": "0",
          "country": "South Korea"
        },
        {
          "id": "ssc",
          "display": "SSC",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "steyr",
          "display": "Steyr",
          "is_common": "0",
          "country": "Austria"
        },
        {
          "id": "studebaker",
          "display": "Studebaker",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "subaru",
          "display": "Subaru",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "sunbeam",
          "display": "Sunbeam",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "suzuki",
          "display": "Suzuki",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "talbot",
          "display": "Talbot",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "tata",
          "display": "Tata",
          "is_common": "1",
          "country": "India"
        },
        {
          "id": "tatra",
          "display": "Tatra",
          "is_common": "0",
          "country": "Czech Republic"
        },
        {
          "id": "tesla",
          "display": "Tesla",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "toyota",
          "display": "Toyota",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "trabant",
          "display": "Trabant",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "triumph",
          "display": "Triumph",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "tvr",
          "display": "TVR",
          "is_common": "1",
          "country": "UK"
        },
        {
          "id": "vauxhall",
          "display": "Vauxhall",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "vector",
          "display": "Vector",
          "is_common": "1",
          "country": "Japan"
        },
        {
          "id": "venturi",
          "display": "Venturi",
          "is_common": "1",
          "country": "France"
        },
        {
          "id": "volkswagen",
          "display": "Volkswagen",
          "is_common": "1",
          "country": "Germany"
        },
        {
          "id": "volvo",
          "display": "Volvo",
          "is_common": "1",
          "country": "Sweden"
        },
        {
          "id": "wartburg",
          "display": "Wartburg",
          "is_common": "0",
          "country": "Germany"
        },
        {
          "id": "westfield",
          "display": "Westfield",
          "is_common": "0",
          "country": "UK"
        },
        {
          "id": "willys-overland",
          "display": "Willys-Overland",
          "is_common": "1",
          "country": "USA"
        },
        {
          "id": "xedos",
          "display": "Xedos",
          "is_common": "0",
          "country": "Japan"
        },
        {
          "id": "zagato",
          "display": "Zagato",
          "is_common": "1",
          "country": "Italy"
        },
        {
          "id": "zastava",
          "display": "Zastava",
          "is_common": "0",
          "country": "Serbia"
        },
        {
          "id": "zaz",
          "display": "ZAZ",
          "is_common": "0",
          "country": "Ukraine"
        },
        {
          "id": "zenvo",
          "display": "Zenvo",
          "is_common": "0",
          "country": "Denmark"
        },
        {
          "id": "zil",
          "display": "ZIL",
          "is_common": "0",
          "country": "Russia"
        }
      ]    ;

    return { courses, cars };
  }
}
