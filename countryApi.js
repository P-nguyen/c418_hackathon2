class CountryApi {
  static getAllCountries() {
    return _countries;
  }

  static getCountryLogoUrl(countryCode) {
    return `http://www.countryflags.io/${countryCode}/flat/64.png`;
  }

  static getCountryNameFromCode(countryCode) {
      return _countries.find((country) => {
        return country.code === countryCode.toUpperCase();
      }).name;
  }
  static getFoodFromCountry(countryCode){
    return _countries.find((country) => {
      return country.code === countryCode.toUpperCase();
    }).food;  
}}
  const _countries=[
  {
    "code": "AF",
    "name": "Afghanistan",
    "food": "Kabuli Palaw"
  },
  {
    "code": "AL",
    "name": "Albania",
    "food": "kosi"
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "food": "Couscous"
  },
  {
    "code": "AS",
    "name": "American Samoa"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "food": "Escudella"
  },
  {
    "code": "AO",
    "name": "Angola",
    "food": "Moamba de galinha"
  },
  {
    "code": "AI",
    "name": "Anguilla"
  },
  {
    "code": "AQ",
    "name": "Antarctica"
  },
  {
    "code": "AG",
    "name": "Antigua And Barbuda"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "food": "Empanada"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "food": "Khash"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "food": "Keshi yena"
  },
  {
    "code": "AU",
    "name": "Australia",
    "food": "Pavlova"
  },
  {
    "code": "AT",
    "name": "Austria",
    "food": "Wiener Schnitzel"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "food": " Dolma"
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "food": "Crack conch with peas and rice"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "food": "Machboos"
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "food": "Rice and Ilish"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "food": "Cou-Cou and Flying Fish"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "food": "Draniki"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "food": "Belgian waffle"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "food": "Fry jack"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "food": "Kuli Kuli"
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "food": "Bermuda fish chowder"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "food": "Ema datshi"
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "food": "papa rellena"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "food": "Seswaa"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "food": "Feijoada"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "food": "Banitsa"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "food": "Riz Gras"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "food": "Elephant soup"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "food": "Amok trey"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "food": "sweet potato"
  },
  {
    "code": "CA",
    "name": "Canada",
    "food": "Nanaimo bar"
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "food": "Cachupa"
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "food": "Conch Stew"
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "food": "Cassava fufu"
  },
  {
    "code": "TD",
    "name": "Chad",
    "food": "Boule"
  },
  {
    "code": "CL",
    "name": "Chile",
    "food": "Empanada"
  },
  {
    "code": "CN",
    "name": "China",
    "food": "dumplings"
  },
  {
    "code": "CX",
    "name": "Christmas Island",
    "food":"papaya"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "food": "Sancocho"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "food": "Langouste a la Vanille"
  },
  {
    "code": "CG",
    "name": "Congo",
    "food":"pondu"
  },
  {
    "code": "CD",
    "name": "Congo, Democratic Republic",
    "food":"Moambe Chicken"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "food": "Rori"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "food": "Gallo pinto"
  },
  {
    "code": "CI",
    "name": "Cote D'Ivoire",
    "food":"Aloko"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "food": "Istrian stew"
  },
  {
    "code": "CU",
    "name": "Cuba",
    "food": "Ropa vieja"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "food": "Souvla"
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "food": "roast pork"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "food": "fried pork"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "food": "Skoudehkaris"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "food": "Fish broth"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "food": "Sancocho"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "food": "Ceviche"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "food": "falafel"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "food": "Pupusa"
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "food": "Succotash"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "food": "Zigini with injera,"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "food": "sauerkraut stew"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "food": "Kitfo"
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "food":"fried fish"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "food":"Lamb and mutton"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "food": "Kokoda"
  },
  {
    "code": "FI",
    "name": "Finland",
    "food": "Karjalanpaisti"
  },
  {
    "code": "FR",
    "name": "France",
    "food": "macarons"
  },
  {
    "code": "GA",
    "name": "Gabon",
    "food": "Poulet Nyembwe"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "food": "Benachin"
  },
  {
    "code": "GE",
    "name": "Georgia",
    "food": "Khachapuri"
  },
  {
    "code": "DE",
    "name": "Germany",
    "food": "Sauerbraten"
  },
  {
    "code": "GH",
    "name": "Ghana",
    "food": "Fufu"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "food": "Profiteroles"
  },
  {
    "code": "GR",
    "name": "Greece",
    "food": "moussaka"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "food": "Kiviak"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "food": "Oil Down"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "food": "Fiambre"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "food": "Poulet Yassa"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "food": "Jollof rice"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "food": "Pepperpot"
  },
  {
    "code": "HT",
    "name": "Haiti",
    "food": "Red beans and rice"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "food": "Carne asada"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "food": "chicken paprikash"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "food": "crossaint"
  },
  {
    "code": "IN",
    "name": "India",
    "food": "Tandoori Chicken"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "food": "Soto"
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "food": "Dolma"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "food": "Irish stew"
  },
  {
    "code": "IL",
    "name": "Israel",
    "food": "Hummus"
  },
  {
    "code": "IT",
    "name": "Italy",
    "food": "Risotto"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "food": "Ackee and Saltfish"
  },
  {
    "code": "JP",
    "name": "Japan",
    "food": "Sushi"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "food": "Mansaf"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "food": "Beshbarmak"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "food": "Ugali"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "food": "Palusami"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "food": "Machboos"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "food": "Beshbarmak"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "food": "Latke"
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "food": "Kibbeh"
  },
  {
    "code": "LR",
    "name": "Liberia",
    "food": "Dumboy"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "food": "Cepelinai"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "food": "Judd mat Gaardebounen,"
  },
  {
    "code": "MK",
    "name": "Macedonia",
    "food": "Balkan"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "food": "Romazava"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "food": "Nshima"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "food": "Nasi lemak"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "food": "Garudhiya"
  },
  {
    "code": "ML",
    "name": "Mali",
    "food": "Maafe"
  },
  {
    "code": "MT",
    "name": "Malta",
    "food": "Pastizzi"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "food": "Macadamia nut pie"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "food": "Thieboudienne"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "food": "Octopus Curry"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "food": "Mole poblano"
  },
  {
    "code": "MD",
    "name": "Moldova",
    "food": "Sarmale"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "food": "Barbaguian"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "food": "Buuz"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "food": "Punjene paprike"
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "food": "Goat water"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "food": "Couscous"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "food": "Frango"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "food": "Braais"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "food": "Coconut fish"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "food": "Dal bhat"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "food": "Stamppot"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "food": "Pavlova"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "food": "Gallo pinto"
  },
  {
    "code": "NE",
    "name": "Niger",
    "food": "Jollof rice"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "food": "Fufu and Egusi soup"
  },
  {
    "code": "NO",
    "name": "Norway",
    "food": "Lapskaus"
  },
  {
    "code": "OM",
    "name": "Oman",
    "food": "Shuwa"
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "food": "Seekh Kabab"
  },
  {
    "code": "PW",
    "name": "Palau",
    "food": "Bat soup"
  },

  {
    "code": "PA",
    "name": "Panama",
    "food": "Sancocho de gallina"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "food": "Mumu"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "food": "Sopa paraguaya"
  },
  {
    "code": "PE",
    "name": "Peru",
    "food": "Ceviche"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "food": "Adobo"
  },
  {
    "code": "PL",
    "name": "Poland",
    "food": "Bigos"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "food": "Bacalhau"
  },
  {
    "code": "PR",
    "name": "Puerto Rico",
    "food": "Mofongo"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "food": "Machboos"
  },
  {
    "code": "RO",
    "name": "Romania",
    "food": "Sarmale"
  },
  {
    "code": "RU",
    "name": "Russia",
    "food":"Beef Stroganoff",
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "food": "Ugali"
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "food": "Green fig and saltfish"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "food": "Palusami"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "food": "Torta Tre Monti"
  },

  {
    "code": "SA",
    "name": "Saudi Arabia",
    "food": "Kabsa"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "food": "Thieboudienne"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "food": "Ajvar"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "food": "Fruit Bat Soup"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "food": "Cassava leaves"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "food": "Chilli crab"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "food": "Bryndzove halushky"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "food": "Belokranjska povitica"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "food": "Poi"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "food": "Canjeero with goat stew"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "food": "Bobotie"
  },
  {
    "code": "KR",
    "name": "South Korea",
    "food": "Bibimbap"
  },
  {
    "code": "ES",
    "name": "Spain",
    "food": "Tortilla espanola"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "food": "Rice and curry"
  },
  {
    "code": "SD",
    "name": "Sudan",
    "food": "Ful medames"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "food": "Pom"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "food": "Ostkaka"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "food": "Fondue"
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "food": "Beef noodle soup"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "food": "O'sh"
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "food": "Ugali"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "food": "Pad Thai"
  },
  {
    "code": "TG",
    "name": "Togo",
    "food": "Yeyebessissi"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "food": "Couscous"
  },
  {
    "code": "TR",
    "name": "Turkey",
    "food": "Kuru fasulye with pilav"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "food": "Palaw"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "food": "Pulaka"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "food": "Matoke"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "food": "Borscht"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "food": "Biryani"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "food": "Chicken tikka masala"
  },
  {
    "code": "US",
    "name": "United States",
    "food": "Apple pie"
  },

  {
    "code": "UY",
    "name": "Uruguay",
    "food": "Asado"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "food": "pork stew"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "food": "Lap lap"
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "food": "PABELLON CRIOLLO"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "food": "Kabsa"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "food": "Nshima"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "food": "Sadza"
  }
];
