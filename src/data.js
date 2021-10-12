export const languages = [
  {
    lang: "ENGLISH",
    code: "en",
  },
  {
    lang: "GREEK",
    code: "el",
  },
  {
    lang: "ITALIAN",
    code: "it",
  },
  {
    lang: "KANNADA",
    code: "kn",
  },
  {
    lang: "LATIN",
    code: "la",
  },
  {
    lang: "LITHUANIAN",
    code: "lt",
  },
  {
    lang: "MALAY",
    code: "ms",
  },
  {
    lang: "NORWEGIAN",
    code: "no",
  },
  {
    lang: "POLISH",
    code: "pl",
  },
  {
    lang: "ROMANIAN",
    code: "ro",
  },
  {
    lang: "SERBIAN",
    code: "sr",
  },
  {
    lang: "SLOVENIAN",
    code: "sl",
  },
  {
    lang: "SWAHILI",
    code: "sw",
  },
  {
    lang: "TAMIL",
    code: "ta",
  },
  {
    lang: "THAI",
    code: "th",
  },
  {
    lang: "UKRAINIAN",
    code: "uk",
  },
  {
    lang: "VIETNAMESE",
    code: "vi",
  },
  {
    lang: "YIDDISH",
    code: "yi",
  },
  {
    lang: "ALBANIAN",
    code: "sq",
  },
  {
    lang: "AZERBAIJANI",
    code: "az",
  },
  {
    lang: "BENGALI",
    code: "bn",
  },
  {
    lang: "BULGARIAN",
    code: "bg",
  },
  {
    lang: "CHINESE_SIMPLIFIED",
    code: "zh-CN",
  },
  {
    lang: "CROATIAN",
    code: "hr",
  },
  {
    lang: "DANISH",
    code: "da",
  },
  {
    lang: "ESTONIAN",
    code: "et",
  },
  {
    lang: "FINNISH",
    code: "fi",
  },
  {
    lang: "GALICIAN",
    code: "gl",
  },
  {
    lang: "GERMAN",
    code: "de",
  },
  {
    lang: "GUJARATI",
    code: "gu",
  },
  {
    lang: "HEBREW",
    code: "iw",
  },
  {
    lang: "HUNGARIAN",
    code: "hu",
  },
  {
    lang: "INDONESIAN",
    code: "id",
  },
  {
    lang: "AFRIKAANS",
    code: "af",
  },
  {
    lang: "ARABIC",
    code: "ar",
  },
  {
    lang: "BASQUE",
    code: "eu",
  },
  {
    lang: "BELARUSIAN",
    code: "be",
  },
  {
    lang: "CATALAN",
    code: "ca",
  },
  {
    lang: "CHINESE_TRADITIONAL",
    code: "zh-TW",
  },
  {
    lang: "CZECH",
    code: "cs",
  },
  {
    lang: "DUTCH",
    code: "nl",
  },
  {
    lang: "ESPERANTO",
    code: "eo",
  },
  {
    lang: "FILIPINO",
    code: "tl",
  },
  {
    lang: "FRENCH",
    code: "fr",
  },
  {
    lang: "GEORGIAN",
    code: "ka",
  },
  {
    lang: "HAITIAN_CREOLE",
    code: "ht",
  },
  {
    lang: "HINDI",
    code: "hi",
  },
  {
    langL: "ICELANDIC",
    code: "is",
  },
  {
    lang: "IRISH",
    code: "ga",
  },
  {
    lang: "JAPANESE",
    code: "ja",
  },
  {
    lang: "KOREAN",
    code: "ko",
  },
  {
    lang: "LATVIAN",
    code: "lv",
  },
  {
    lang: "MACEDONIAN",
    code: "mk",
  },
  {
    lang: "MALTESE",
    code: "mt",
  },
  {
    lang: "PERSIAN",
    code: "fa",
  },
  {
    lang: "PORTUGUESE",
    code: "pt",
  },
  {
    lang: "RUSSIAN",
    code: "ru",
  },
  {
    lang: "SLOVAK",
    code: "sk",
  },
  {
    lang: "SPANISH",
    code: "es",
  },
  {
    lang: "SWEDISH",
    code: "sv",
  },
  {
    lang: "TELUGU",
    code: "te",
  },
  {
    lang: "TURKISH",
    code: "tr",
  },
  {
    lang: "URDU",
    code: "ur",
  },
  {
    lang: "WELSH",
    code: "cy",
  },
];

// peformed an alphabetical order of sorting the languages
// with JavaScript's Array.prototype.sort() method
languages.sort((a, b) => {
  if (a.lang < b.lang) {
    return -1;
  }
  if (a.lang > b.lang) {
    return 1;
  }
  return 0;
});

export const currencies = [
  {
    name: "Afghan afghani",
    currency_code: "AFN",
  },
  {
    name: "Lesotho loti",
    currency_code: "LSL",
  },
  { name: "Albanian lek", currency_code: "ALL" },
  { name: "Liberian dollar", currency_code: "LRD" },
  {
    name: "Algerian dinar",
    currency_code: "DZD",
  },
  {
    name: "Libyan dinar",
    currency_coode: "LYD",
  },
  {
    name: "Angolan kwanza",
    currency_code: "AOA",
  },
  { name: "Macanese pataca", currency_code: "MOP" },
  { name: "Argentine peso", currency_code: "ARS" },
  {
    name: "Macedonian denar",
    currency_code: "MKD",
  },
  {
    name: "Armenian dram",
    currency_code: "AMD",
  },
  {
    name: "Malagasy ariary",
    currency_code: "MGA",
  },
  {
    name: "Aruban florin",
    currency_code: "AWG",
  },
  {
    name: "Malawian kwacha",
    currency_code: "MWK",
  },
  {
    name: "Australian dollar",
    currency_code: "AUD",
  },
  {
    name: "Malaysian ringgit",
    currency_code: "MYR",
  },
  {
    name: "Azerbaijani manat",
    currency_code: "AZN",
  },
  {
    name: "Maldivian rufiyaa",
    currency_code: "MVR",
  },
  {
    name: "Bahamian dollar",
    currency_code: "BSD",
  },
  {
    name: "Manx pound",
    currency_code: "IMP",
  },
  {
    name: "Bahraini dinar",
    currency_code: "BHD",
  },
  {
    name: "Mauritanian ouguiya",
    currency_code: "MRU",
  },
  {
    name: "Bangladeshi taka",
    currency_code: "BDT",
  },
  { name: "Mauritian rupee", currency_code: "MUR" },
  {
    name: "Barbadian dollar",
    currency_code: "BBD",
  },
  {
    name: "Mexican peso",
    currency_code: "MXN",
  },
  {
    name: "Belarusian ruble",
    currency_code: "BYN",
  },
  {
    name: "Moldovan leu",
    currency_code: "MDL",
  },
  {
    name: "Belize dollar",
    currency_code: "BZD",
  },
  {
    name: "Mongolian tögrög",
    currency_code: "MNT",
  },
  {
    name: "Bermudian dollar",
    currency_code: "BMD",
  },
  {
    name: "Moroccan dirham",
    currency_code: "MAD",
  },
  {
    name: "Bhutanese ngultrum",
    currency_code: "BTN",
  },
  {
    name: "Mozambican metical",
    currency_code: "MZN",
  },
  {
    name: "Bolivian boliviano",
    currency_code: "BOB",
  },
  {
    name: "Namibian dollar",
    currency_code: "NAD",
  },
  {
    name: "Bosnia and Herzegovina convertible mark",
    currency_code: "BAM",
  },
  {
    name: "Nepalese rupee",
    currency_code: "NPR",
  },
  {
    name: "Botswana pula",
    currency_code: "BWP",
  },
  {
    name: "Netherlands Antillean guilder",
    currency_code: "ANG",
  },
  {
    name: "Brazilian real",
    currency_code: "BRL",
  },
  {
    name: "New Taiwan dollar",
    currency_code: "TWD",
  },
  {
    name: "British pound",
    currency_code: "GBP",
  },
  {
    name: "New Zealand dollar",
    currency_code: "NZD",
  },
  {
    name: "Brunei dollar",
    currecny_code: "BND",
  },
  {
    name: "Nicaraguan córdoba",
    currency_code: "NIO",
  },
  {
    name: "Bulgarian lev",
    currency_code: "BGN",
  },
  {
    name: "Nigerian naira",
    currency_code: "NGN",
  },
  {
    name: "Burmese kyat",
    currency_code: "MMK",
  },
  {
    name: "North Korean won",
    currency_code: "KPW",
  },
  {
    name: "Burundian franc",
    currency_code: "BIF",
  },
  {
    name: "Norwegian krone",
    currency_code: "NOK",
  },
  {
    name: "Cambodian riel",
    currency_code: "KHR",
  },
  {
    name: "Omani rial",
    currency_code: "OMR",
  },
  {
    name: "Canadian dollar",
    currency_code: "CAD",
  },
  {
    name: "Pakistani rupee",
    currency_code: "PKR",
  },
  {
    name: "Cape Verdean escudo",
    currency_code: "CVE",
  },
  {
    name: "Panamanian balboa",
    currency_code: "PAB",
  },
  {
    name: "Cayman Islands dollar",
    currency_code: "KYD",
  },
  {
    name: "Papua New Guinean kina",
    currency_code: "PGK",
  },
  {
    name: "Central African CFA franc",
    currency_code: "XAF",
  },
  {
    name: "Paraguayan guaraní",
    currency_code: "PYG",
  },
  {
    name: "CFP franc",
    currency_code: "XPF",
  },
  {
    name: "Peruvian sol",
    currency_code: "PEN",
  },
  {
    name: "Chilean peso",
    curency_code: "CLP",
  },
  {
    name: "Philippine peso",
    currency_code: "PHP",
  },
  {
    name: "Chinese yuan",
    currency_ode: "CNY",
  },
  {
    name: "Pitcairn Islands dollar",
    currency_code: "PND",
  },
  {
    name: "Colombian peso",
    curency_code: "COP",
  },
  {
    name: "Polish złoty",
    currency_code: "PLN",
  },
  {
    name: "Comorian franc",
    currency_code: "KMF",
  },
  {
    name: "Qatari riyal",
    currecny_code: "QAR",
  },
  {
    name: "Congolese franc",
    currency_code: "CDF",
  },
  {
    name: "Romanian leu",
    currecny_code: "RON",
  },
  {
    name: "Cook Islands dollar",
    currency_code: "CKD",
  },
  {
    name: "RTGS dollar",
    currency_code: "ZWL",
  },
  {
    name: "Costa Rican colón",
    currency_code: "CRC",
  },
  {
    name: "Russian ruble",
    currency_code: "RUB",
  },
  {
    name: "Croatian kuna",
    currency_code: "HRK",
  },
  {
    name: "Rwandan franc",
    currency_code: "RWF",
  },
  {
    name: "Cuban convertible peso",
    currency_code: "CUC",
  },
  {
    name: "Saint Helena pound",
    currency_code: "SHP",
  },
  {
    name: "Cuban peso",
    currency_code: "CUP",
  },
  {
    name: "Samoan tālā",
    currency_code: "WST",
  },
  {
    name: "Czech koruna",
    currency_code: "CZK",
  },
  {
    name: "São Tomé and Príncipe dobra",
    currency_code: "STN",
  },
  {
    name: "Danish krone",
    currency_code: "DKK",
  },
  {
    name: "Saudi riyal",
    currency_code: "SAR",
  },
  {
    name: "Djiboutian franc",
    currency_code: "DJF",
  },
  {
    name: "Serbian dinar",
    currency_code: "RSD",
  },
  {
    name: "Dominican peso",
    currency_code: "DOP",
  },
  {
    name: "Seychellois rupee",
    currency_code: "SCR",
  },
  {
    name: "Eastern Caribbean dollar",
    currency_code: "XCD",
  },
  {
    name: "Sierra Leonean leone",
    currency_code: "SLL",
  },
  {
    name: "Egyptian pound",
    currency_code: "EGP",
  },
  {
    name: "Singapore dollar",
    currency_code: "SGD",
  },
  {
    name: "Eritrean nakfa",
    currency_code: "ERN",
  },
  {
    name: "Solomon Islands dollar",
    currency_code: "SBD",
  },
  {
    name: "Ethiopian birr",
    currency_code: "ETB",
  },
  {
    name: "Somali shilling",
    currency_code: "SOS",
  },
  {
    name: "Euro",
    currency_code: "EUR",
  },
  {
    name: "Somaliland shilling",
    currency_code: "SLS",
  },
  {
    name: "Falkland Islands pound",
    currency_code: "FKP",
  },
  {
    name: "South African rand",
    currency_code: "ZAR",
  },
  {
    name: "Faroese króna",
    currency_code: "FOK",
  },
  {
    name: "South Korean won",
    currency: "KRW",
  },
  {
    name: "Fijian dollar",
    currency_code: "FJD",
  },
  {
    name: "South Sudanese pound",
    currency_code: "SSP",
  },
  {
    name: "Gambian dalasi",
    currency_code: "GMD",
  },
  {
    name: "Sri Lankan rupee",
    currency_code: "LKR",
  },
  {
    name: "Georgian lari",
    currency_code: "GEL",
  },
  {
    name: "Sudanese pound",
    currency_code: "SDG",
  },
  {
    name: "Ghanaian cedi",
    currency_code: "GHS",
  },
  {
    name: "Surinamese dollar",
    currency_code: "SRD",
  },
  {
    name: "Gibraltar pound",
    currency_code: "GIP",
  },
  {
    name: "Swazi lilangeni",
    currency_code: "SZL",
  },
  {
    name: "Guatemalan quetzal",
    currency_code: "GTQ",
  },
  {
    name: "Swedish krona",
    currency_code: "SEK",
  },
  {
    name: "Guernsey pound",
    currency_code: "GGP",
  },
  {
    name: "Swiss franc",
    currency_code: "CHF",
  },
  {
    name: "Guinean franc",
    currency_code: "GNF",
  },
  {
    name: "Syrian pound",
    currency_code: "SYP",
  },
  {
    name: "Guyanese dollar",
    currency_code: "GYD",
  },
  {
    name: "Tajikistani somoni",
    currency_code: "TJS",
  },
  {
    name: "Haitian gourde",
    currency_code: "HTG",
  },
  {
    name: "Tanzanian shilling",
    currency_code: "TZS",
  },
  {
    name: "Honduran lempira",
    currency_code: "HNL",
  },
  {
    name: "Thai baht",
    currency_code: "THB",
  },
  {
    name: "Hong Kong dollar",
    currency_code: "HKD",
  },
  {
    name: "Tongan paʻanga",
    currency_code: "TOP",
  },
  {
    name: "Hungarian forint",
    currency_code: "HUF",
  },
  {
    name: "Transnistrian ruble",
    currency_code: "PRB",
  },
  {
    name: "Icelandic króna",
    currecny_code: "ISK",
  },
  {
    name: "Trinidad and Tobago dollar",
    currency_code: "TTD",
  },
  {
    name: "Indian rupee",
    currency_code: "INR",
  },
  {
    name: "Tunisian dinar",
    currency_code: "TND",
  },
  {
    name: "Indonesian rupiah",
    currency_code: "IDR",
  },
  {
    name: "Turkish lira",
    currency_code: "TRY",
  },
  {
    name: "Iranian rial",
    currency_code: "IRR",
  },
  {
    name: "Turkmenistan manat",
    currency_code: "TMT",
  },
  {
    name: "Iraqi dinar",
    currency_code: "IQD",
  },
  {
    name: "Tuvaluan dollar",
    currency_code: "TVD",
  },
  {
    name: "Israeli new shekel",
    currency_code: "ILS",
  },
  {
    name: "Ugandan shilling",
    currency_code: "UGX",
  },
  {
    name: "Jamaican dollar",
    currency_code: "JMD",
  },
  {
    name: "Ukrainian hryvnia",
    currency_code: "UAH",
  },
  {
    name: "Japanese yen",
    currency_code: "JPY",
  },
  {
    name: "United Arab Emirates dirham",
    currency_code: "AED",
  },
  {
    name: "Jersey pound",
    currency_code: "JEP",
  },
  {
    name: "United States dollar",
    currency_code: "USD",
  },
  {
    name: "Jordanian dinar",
    currency_code: "JOD",
  },
  {
    name: "Uruguayan peso",
    currency_code: "UYU",
  },
  {
    name: "Kazakhstani tenge",
    currency_code: "KZT",
  },
  {
    name: "Uzbekistani soʻm",
    currency_code: "UZS",
  },
  {
    name: "Kenyan shilling",
    currency_code: "KES",
  },
  {
    name: "Vanuatu vatu",
    currency_code: "VUV",
  },
  {
    name: "Kiribati dollar",
    currency_code: "KID",
  },
  {
    name: "Venezuelan bolívar soberano",
    currency_code: "VES",
  },
  {
    name: "Kuwaiti dinar",
    currrency_code: "KWD",
  },
  {
    name: "Vietnamese đồng",
    curency_code: "VND",
  },
  {
    name: "Kyrgyzstani som",
    currency_code: "KGS",
  },
  {
    name: "West African CFA franc",
    currency_code: "XOF",
  },
  {
    name: "Lao kip",
    currency_code: "LAK",
  },
  {
    name: "Yemeni rial",
    currency_code: "YER",
  },
  {
    name: "Lebanese pound",
    currency_code: "LBP",
  },
  {
    name: "Zambian kwacha",
    currency_code: "ZMW",
  },
];

// peformed an alphabetical order of sorting the currencies
// with JavaScript's Array.prototype.sort() method
currencies.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
