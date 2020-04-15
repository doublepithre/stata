"use strict";

const currencies = [
  {
    currencyId: 1,
    currencyShort: "AED",
    currencyFull: "United Arab Emirates Dirham",
    countryId: 237
  },
  {
    currencyId: 2,
    currencyShort: "AFN",
    currencyFull: "Afghanistan Afghani",
    countryId: 1
  },
  {
    currencyId: 3,
    currencyShort: "ALL",
    currencyFull: "Albania Lek",
    countryId: 3
  },
  {
    currencyId: 4,
    currencyShort: "AMD",
    currencyFull: "Armenia Dram",
    countryId: 13
  },
  {
    currencyId: 5,
    currencyShort: "ANG",
    currencyFull: "Netherlands Antilles Guilder",
    countryId: 159
  },
  {
    currencyId: 6,
    currencyShort: "AOA",
    currencyFull: "Angola Kwanza",
    countryId: 7
  },
  {
    currencyId: 7,
    currencyShort: "ARS",
    currencyFull: "Argentina Peso",
    countryId: 12
  },
  {
    currencyId: 8,
    currencyShort: "AUD",
    currencyFull: "Australia Dollar",
    countryId: 15
  },
  {
    currencyId: 9,
    currencyShort: "AWG",
    currencyFull: "Aruba Guilder",
    countryId: 14
  },
  {
    currencyId: 10,
    currencyShort: "AZN",
    currencyFull: "Azerbaijan Manat",
    countryId: 17
  },
  {
    currencyId: 11,
    currencyShort: "BAM",
    currencyFull: "Bosnia and Herzegovina Convertible Marka",
    countryId: 30
  },
  {
    currencyId: 12,
    currencyShort: "BBD",
    currencyFull: "Barbados Dollar",
    countryId: 21
  },
  {
    currencyId: 13,
    currencyShort: "BDT",
    currencyFull: "Bangladesh Taka",
    countryId: 20
  },
  {
    currencyId: 14,
    currencyShort: "BGN",
    currencyFull: "Bulgaria Lev",
    countryId: 36
  },
  {
    currencyId: 15,
    currencyShort: "BHD",
    currencyFull: "Bahrain Dinar",
    countryId: 19
  },
  {
    currencyId: 16,
    currencyShort: "BIF",
    currencyFull: "Burundi Franc",
    countryId: 38
  },
  {
    currencyId: 17,
    currencyShort: "BMD",
    currencyFull: "Bermuda Dollar",
    countryId: 26
  },
  {
    currencyId: 18,
    currencyShort: "BND",
    currencyFull: "Brunei Darussalam Dollar",
    countryId: 35
  },
  {
    currencyId: 19,
    currencyShort: "BOB",
    currencyFull: "Bolivia Bolíviano",
    countryId: 28
  },
  {
    currencyId: 20,
    currencyShort: "BRL",
    currencyFull: "Brazil Real",
    countryId: 33
  },
  {
    currencyId: 21,
    currencyShort: "BSD",
    currencyFull: "Bahamas Dollar",
    countryId: 18
  },
  {
    currencyId: 22,
    currencyShort: "BTN",
    currencyFull: "Bhutan Ngultrum",
    countryId: 27
  },
  {
    currencyId: 23,
    currencyShort: "BWP",
    currencyFull: "Botswana Pula",
    countryId: 31
  },
  {
    currencyId: 24,
    currencyShort: "BYN",
    currencyFull: "Belarus Ruble",
    countryId: 22
  },
  {
    currencyId: 25,
    currencyShort: "BZD",
    currencyFull: "Belize Dollar",
    countryId: 24
  },
  {
    currencyId: 26,
    currencyShort: "CAD",
    currencyFull: "Canada Dollar",
    countryId: 41
  },
  {
    currencyId: 27,
    currencyShort: "CDF",
    currencyFull: "Congo/Kinshasa Franc",
    countryId: 52
  },
  {
    currencyId: 28,
    currencyShort: "CHF",
    currencyFull: "Switzerland Franc",
    countryId: 218
  },
  {
    currencyId: 29,
    currencyShort: "CLP",
    currencyFull: "Chile Peso",
    countryId: 46
  },
  {
    currencyId: 30,
    currencyShort: "CNY",
    currencyFull: "China Yuan Renminbi",
    countryId: 47
  },
  {
    currencyId: 31,
    currencyShort: "COP",
    currencyFull: "Colombia Peso",
    countryId: 50
  },
  {
    currencyId: 32,
    currencyShort: "CRC",
    currencyFull: "Costa Rica Colon",
    countryId: 55
  },
  {
    currencyId: 33,
    currencyShort: "CUC",
    currencyFull: "Cuba Convertible Peso",
    countryId: 58
  },
  {
    currencyId: 34,
    currencyShort: "CUP",
    currencyFull: "Cuba Peso",
    countryId: 58
  },
  {
    currencyId: 35,
    currencyShort: "CVE",
    currencyFull: "Cape Verde Escudo",
    countryId: 42
  },
  {
    currencyId: 36,
    currencyShort: "CZK",
    currencyFull: "Czech Republic Koruna",
    countryId: 61
  },
  {
    currencyId: 37,
    currencyShort: "DJF",
    currencyFull: "Djibouti Franc",
    countryId: 63
  },
  {
    currencyId: 38,
    currencyShort: "DKK",
    currencyFull: "Denmark Krone",
    countryId: 62
  },
  {
    currencyId: 39,
    currencyShort: "DOP",
    currencyFull: "Dominican Republic Peso",
    countryId: 65
  },
  {
    currencyId: 40,
    currencyShort: "DZD",
    currencyFull: "Algeria Dinar",
    countryId: 4
  },
  {
    currencyId: 41,
    currencyShort: "EGP",
    currencyFull: "Egypt Pound",
    countryId: 67
  },
  {
    currencyId: 42,
    currencyShort: "ERN",
    currencyFull: "Eritrea Nakfa",
    countryId: 71
  },
  {
    currencyId: 43,
    currencyShort: "ETB",
    currencyFull: "Ethiopia Birr",
    countryId: 73
  },
  {
    currencyId: 44,
    currencyShort: "EUR",
    currencyFull: "Euro Member Countries",
    countryId: null
  },
  {
    currencyId: 45,
    currencyShort: "FJD",
    currencyFull: "Fiji Dollar",
    countryId: 76
  },
  {
    currencyId: 46,
    currencyShort: "FKP",
    currencyFull: "Falkland Islands (Malvinas) Pound",
    countryId: 74
  },
  {
    currencyId: 47,
    currencyShort: "GBP",
    currencyFull: "United Kingdom Pound",
    countryId: 238
  },
  {
    currencyId: 48,
    currencyShort: "GEL",
    currencyFull: "Georgia Lari",
    countryId: 84
  },
  {
    currencyId: 49,
    currencyShort: "GGP",
    currencyFull: "Guernsey Pound",
    countryId: 94
  },
  {
    currencyId: 50,
    currencyShort: "GHS",
    currencyFull: "Ghana Cedi",
    countryId: 86
  },
  {
    currencyId: 51,
    currencyShort: "GIP",
    currencyFull: "Gibraltar Pound",
    countryId: 87
  },
  {
    currencyId: 52,
    currencyShort: "GMD",
    currencyFull: "Gambia Dalasi",
    countryId: 83
  },
  {
    currencyId: 53,
    currencyShort: "GNF",
    currencyFull: "Guinea Franc",
    countryId: 95
  },
  {
    currencyId: 54,
    currencyShort: "GTQ",
    currencyFull: "Guatemala Quetzal",
    countryId: 93
  },
  {
    currencyId: 55,
    currencyShort: "GYD",
    currencyFull: "Guyana Dollar",
    countryId: 97
  },
  {
    currencyId: 56,
    currencyShort: "HKD",
    currencyFull: "Hong Kong Dollar",
    countryId: 102
  },
  {
    currencyId: 57,
    currencyShort: "HNL",
    currencyFull: "Honduras Lempira",
    countryId: 101
  },
  {
    currencyId: 58,
    currencyShort: "HRK",
    currencyFull: "Croatia Kuna",
    countryId: 57
  },
  {
    currencyId: 59,
    currencyShort: "HTG",
    currencyFull: "Haiti Gourde",
    countryId: 98
  },
  {
    currencyId: 60,
    currencyShort: "HUF",
    currencyFull: "Hungary Forint",
    countryId: 103
  },
  {
    currencyId: 61,
    currencyShort: "IDR",
    currencyFull: "Indonesia Rupiah",
    countryId: 106
  },
  {
    currencyId: 62,
    currencyShort: "ILS",
    currencyFull: "Israel Shekel",
    countryId: 111
  },
  {
    currencyId: 63,
    currencyShort: "IMP",
    currencyFull: "Isle of Man Pound",
    countryId: 110
  },
  {
    currencyId: 64,
    currencyShort: "INR",
    currencyFull: "India Rupee",
    countryId: 105
  },
  {
    currencyId: 65,
    currencyShort: "IQD",
    currencyFull: "Iraq Dinar",
    countryId: 108
  },
  {
    currencyId: 66,
    currencyShort: "IRR",
    currencyFull: "Iran Rial",
    countryId: 107
  },
  {
    currencyId: 67,
    currencyShort: "ISK",
    currencyFull: "Iceland Krona",
    countryId: 104
  },
  {
    currencyId: 68,
    currencyShort: "JEP",
    currencyFull: "Jersey Pound",
    countryId: 115
  },
  {
    currencyId: 69,
    currencyShort: "JMD",
    currencyFull: "Jamaica Dollar",
    countryId: 113
  },
  {
    currencyId: 70,
    currencyShort: "JOD",
    currencyFull: "Jordan Dinar",
    countryId: 116
  },
  {
    currencyId: 71,
    currencyShort: "JPY",
    currencyFull: "Japan Yen",
    countryId: 114
  },
  {
    currencyId: 72,
    currencyShort: "KES",
    currencyFull: "Kenya Shilling",
    countryId: 118
  },
  {
    currencyId: 73,
    currencyShort: "KGS",
    currencyFull: "Kyrgyzstan Som",
    countryId: 123
  },
  {
    currencyId: 74,
    currencyShort: "KHR",
    currencyFull: "Cambodia Riel",
    countryId: 39
  },
  {
    currencyId: 75,
    currencyShort: "KMF",
    currencyFull: "Comorian Franc",
    countryId: 51
  },
  {
    currencyId: 76,
    currencyShort: "KPW",
    currencyFull: "Korea (North) Won",
    countryId: 120
  },
  {
    currencyId: 77,
    currencyShort: "KRW",
    currencyFull: "Korea (South) Won",
    countryId: 121
  },
  {
    currencyId: 78,
    currencyShort: "KWD",
    currencyFull: "Kuwait Dinar",
    countryId: 122
  },
  {
    currencyId: 79,
    currencyShort: "KYD",
    currencyFull: "Cayman Islands Dollar",
    countryId: 43
  },
  {
    currencyId: 80,
    currencyShort: "KZT",
    currencyFull: "Kazakhstan Tenge",
    countryId: 117
  },
  {
    currencyId: 81,
    currencyShort: "LAK",
    currencyFull: "Laos Kip",
    countryId: 124
  },
  {
    currencyId: 82,
    currencyShort: "LBP",
    currencyFull: "Lebanon Pound",
    countryId: 126
  },
  {
    currencyId: 83,
    currencyShort: "LKR",
    currencyFull: "Sri Lanka Rupee",
    countryId: 212
  },
  {
    currencyId: 84,
    currencyShort: "LRD",
    currencyFull: "Liberia Dollar",
    countryId: 128
  },
  {
    currencyId: 85,
    currencyShort: "LSL",
    currencyFull: "Lesotho Loti",
    countryId: 127
  },
  {
    currencyId: 86,
    currencyShort: "LYD",
    currencyFull: "Libya Dinar",
    countryId: 129
  },
  {
    currencyId: 87,
    currencyShort: "MAD",
    currencyFull: "Morocco Dirham",
    countryId: 153
  },
  {
    currencyId: 88,
    currencyShort: "MDL",
    currencyFull: "Moldova Leu",
    countryId: 148
  },
  {
    currencyId: 89,
    currencyShort: "MGA",
    currencyFull: "Madagascar Ariary",
    countryId: 135
  },
  {
    currencyId: 90,
    currencyShort: "MKD",
    currencyFull: "Macedonia Denar",
    countryId: 134
  },
  {
    currencyId: 91,
    currencyShort: "MMK",
    currencyFull: "Myanmar (Burma) Kyat",
    countryId: 155
  },
  {
    currencyId: 92,
    currencyShort: "MNT",
    currencyFull: "Mongolia Tughrik",
    countryId: 150
  },
  {
    currencyId: 93,
    currencyShort: "MOP",
    currencyFull: "Macau Pataca",
    countryId: 133
  },
  {
    currencyId: 94,
    currencyShort: "MRO",
    currencyFull: "Mauritania Ouguiya",
    countryId: 143
  },
  {
    currencyId: 95,
    currencyShort: "MUR",
    currencyFull: "Mauritius Rupee",
    countryId: 144
  },
  {
    currencyId: 96,
    currencyShort: "MVR",
    currencyFull: "Maldives (Maldive Islands) Rufiyaa",
    countryId: 138
  },
  {
    currencyId: 97,
    currencyShort: "MWK",
    currencyFull: "Malawi Kwacha",
    countryId: 136
  },
  {
    currencyId: 98,
    currencyShort: "MXN",
    currencyFull: "Mexico Peso",
    countryId: 146
  },
  {
    currencyId: 99,
    currencyShort: "MYR",
    currencyFull: "Malaysia Ringgit",
    countryId: 137
  },
  {
    currencyId: 100,
    currencyShort: "MZN",
    currencyFull: "Mozambique Metical",
    countryId: 154
  },
  {
    currencyId: 101,
    currencyShort: "NAD",
    currencyFull: "Namibia Dollar",
    countryId: 156
  },
  {
    currencyId: 102,
    currencyShort: "NGN",
    currencyFull: "Nigeria Naira",
    countryId: 164
  },
  {
    currencyId: 103,
    currencyShort: "NIO",
    currencyFull: "Nicaragua Cordoba",
    countryId: 162
  },
  {
    currencyId: 104,
    currencyShort: "NOK",
    currencyFull: "Norway Krone",
    countryId: 168
  },
  {
    currencyId: 105,
    currencyShort: "NPR",
    currencyFull: "Nepal Rupee",
    countryId: 158
  },
  {
    currencyId: 106,
    currencyShort: "NZD",
    currencyFull: "New Zealand Dollar",
    countryId: 161
  },
  {
    currencyId: 107,
    currencyShort: "OMR",
    currencyFull: "Oman Rial",
    countryId: 169
  },
  {
    currencyId: 108,
    currencyShort: "PAB",
    currencyFull: "Panama Balboa",
    countryId: 173
  },
  {
    currencyId: 109,
    currencyShort: "PEN",
    currencyFull: "Peru Sol",
    countryId: 176
  },
  {
    currencyId: 110,
    currencyShort: "PGK",
    currencyFull: "Papua New Guinea Kina",
    countryId: 174
  },
  {
    currencyId: 111,
    currencyShort: "PHP",
    currencyFull: "Philippines Peso",
    countryId: 177
  },
  {
    currencyId: 112,
    currencyShort: "PKR",
    currencyFull: "Pakistan Rupee",
    countryId: 170
  },
  {
    currencyId: 113,
    currencyShort: "PLN",
    currencyFull: "Poland Zloty",
    countryId: 179
  },
  {
    currencyId: 114,
    currencyShort: "PYG",
    currencyFull: "Paraguay Guarani",
    countryId: 175
  },
  {
    currencyId: 115,
    currencyShort: "QAR",
    currencyFull: "Qatar Riyal",
    countryId: 182
  },
  {
    currencyId: 116,
    currencyShort: "RON",
    currencyFull: "Romania Leu",
    countryId: 184
  },
  {
    currencyId: 117,
    currencyShort: "RSD",
    currencyFull: "Serbia Dinar",
    countryId: 199
  },
  {
    currencyId: 118,
    currencyShort: "RUB",
    currencyFull: "Russia Ruble",
    countryId: 185
  },
  {
    currencyId: 119,
    currencyShort: "RWF",
    currencyFull: "Rwanda Franc",
    countryId: 186
  },
  {
    currencyId: 120,
    currencyShort: "SAR",
    currencyFull: "Saudi Arabia Riyal",
    countryId: 197
  },
  {
    currencyId: 121,
    currencyShort: "SBD",
    currencyFull: "Solomon Islands Dollar",
    countryId: 206
  },
  {
    currencyId: 122,
    currencyShort: "SCR",
    currencyFull: "Seychelles Rupee",
    countryId: 200
  },
  {
    currencyId: 123,
    currencyShort: "SDG",
    currencyFull: "Sudan Pound",
    countryId: 213
  },
  {
    currencyId: 124,
    currencyShort: "SEK",
    currencyFull: "Sweden Krona",
    countryId: 217
  },
  {
    currencyId: 125,
    currencyShort: "SGD",
    currencyFull: "Singapore Dollar",
    countryId: 202
  },
  {
    currencyId: 126,
    currencyShort: "SHP",
    currencyFull: "Saint Helena Pound",
    countryId: 188
  },
  {
    currencyId: 127,
    currencyShort: "SLL",
    currencyFull: "Sierra Leone Leone",
    countryId: 201
  },
  {
    currencyId: 128,
    currencyShort: "SOS",
    currencyFull: "Somalia Shilling",
    countryId: 207
  },
  {
    currencyId: 129,
    currencyShort: "SPL",
    currencyFull: "Seborga Luigino",
    countryId: 112
  },
  {
    currencyId: 130,
    currencyShort: "SRD",
    currencyFull: "Suriname Dollar",
    countryId: 214
  },
  {
    currencyId: 131,
    currencyShort: "STD",
    currencyFull: "São Tomé and Príncipe Dobra",
    countryId: 196
  },
  {
    currencyId: 132,
    currencyShort: "SVC",
    currencyFull: "El Salvador Colon",
    countryId: 69
  },
  {
    currencyId: 133,
    currencyShort: "SYP",
    currencyFull: "Syria Pound",
    countryId: 219
  },
  {
    currencyId: 134,
    currencyShort: "SZL",
    currencyFull: "Swaziland Lilangeni",
    countryId: 216
  },
  {
    currencyId: 135,
    currencyShort: "THB",
    currencyFull: "Thailand Baht",
    countryId: 224
  },
  {
    currencyId: 136,
    currencyShort: "TJS",
    currencyFull: "Tajikistan Somoni",
    countryId: 222
  },
  {
    currencyId: 137,
    currencyShort: "TMT",
    currencyFull: "Turkmenistan Manat",
    countryId: 232
  },
  {
    currencyId: 138,
    currencyShort: "TND",
    currencyFull: "Tunisia Dinar",
    countryId: 230
  },
  {
    currencyId: 139,
    currencyShort: "TOP",
    currencyFull: "Tonga Pa'anga",
    countryId: 228
  },
  {
    currencyId: 140,
    currencyShort: "TRY",
    currencyFull: "Turkey Lira",
    countryId: 231
  },
  {
    currencyId: 141,
    currencyShort: "TTD",
    currencyFull: "Trinidad and Tobago Dollar",
    countryId: 229
  },
  {
    currencyId: 142,
    currencyShort: "TVD",
    currencyFull: "Tuvalu Dollar",
    countryId: 234
  },
  {
    currencyId: 143,
    currencyShort: "TWD",
    currencyFull: "Taiwan New Dollar",
    countryId: 221
  },
  {
    currencyId: 144,
    currencyShort: "TZS",
    currencyFull: "Tanzania Shilling",
    countryId: 223
  },
  {
    currencyId: 145,
    currencyShort: "UAH",
    currencyFull: "Ukraine Hryvnia",
    countryId: 236
  },
  {
    currencyId: 146,
    currencyShort: "UGX",
    currencyFull: "Uganda Shilling",
    countryId: 235
  },
  {
    currencyId: 147,
    currencyShort: "USD",
    currencyFull: "United States Dollar",
    countryId: 239
  },
  {
    currencyId: 148,
    currencyShort: "UYU",
    currencyFull: "Uruguay Peso",
    countryId: 241
  },
  {
    currencyId: 149,
    currencyShort: "UZS",
    currencyFull: "Uzbekistan Som",
    countryId: 242
  },
  {
    currencyId: 150,
    currencyShort: "VEF",
    currencyFull: "Venezuela Bolívar",
    countryId: 244
  },
  {
    currencyId: 151,
    currencyShort: "VND",
    currencyFull: "Vietnam Dong",
    countryId: 245
  },
  {
    currencyId: 152,
    currencyShort: "VUV",
    currencyFull: "Vanuatu Vatu",
    countryId: 243
  },
  {
    currencyId: 153,
    currencyShort: "WST",
    currencyFull: "Samoa Tala",
    countryId: 194
  },
  {
    currencyId: 154,
    currencyShort: "XAF",
    currencyFull: "Communauté Financière Africaine (BEAC) CFA Franc BEAC",
    countryId: null
  },
  {
    currencyId: 155,
    currencyShort: "XCD",
    currencyFull: "East Caribbean Dollar",
    countryId: null
  },
  {
    currencyId: 156,
    currencyShort: "XDR",
    currencyFull: "International Monetary Fund (IMF) Special Drawing Rights",
    countryId: null
  },
  {
    currencyId: 157,
    currencyShort: "XOF",
    currencyFull: "Communauté Financière Africaine (BCEAO) Franc",
    countryId: null
  },
  {
    currencyId: 158,
    currencyShort: "XPF",
    currencyFull: "Comptoirs Français du Pacifique (CFP) Franc",
    countryId: null
  },
  {
    currencyId: 159,
    currencyShort: "YER",
    currencyFull: "Yemen Rial",
    countryId: 251
  },
  {
    currencyId: 160,
    currencyShort: "ZAR",
    currencyFull: "South Africa Rand",
    countryId: 208
  },
  {
    currencyId: 161,
    currencyShort: "ZMW",
    currencyFull: "Zambia Kwacha",
    countryId: 253
  },
  {
    currencyId: 162,
    currencyShort: "ZWD",
    currencyFull: "Zimbabwe Dollar",
    countryId: 254
  }
];

const uc = {
  countryId: 263,
  countryShort: "<UNK>",
  countryFull: "<Unknown>",
  countryCode: null
};

const getCurrencyObj = input => {
  if (input && input.length > 1) {
    const linput = (input + "").toLowerCase();
    if (linput.length === 2) {
      const f = currencies.filter(
        c => c.currencyShort.toLowerCase() === linput
      );
      return f[0] ? f[0] : uc;
    } else {
      const f = currencies.filter(c => c.currencyFull.toLowerCase() === linput);
      return f[0] ? f[0] : uc;
    }
  }
  return uc;
};

const getCurrencyId = input => {
  const o = getCurrencyObj(input);
  return o.countryId;
};

const getCurrencyByCountryId = input => {
  const f = currencies.filter(c => Number(c.countryId) === Number(input));
  return f[0];
};

const getCurrencyFull = input => {
  const o = getCurrencyObj(input);
  return o.countryFull.toLowerCase();
};

const getCurrencyShort = input => {
  if (input && input.length === 2) {
    return input.toLowerCase();
  }
  const o = getCurrencyObj(input);
  return o.countryShort.toLowerCase();
};

module.exports = {
  get: getCurrencyObj,
  id: getCurrencyId,
  countryId: getCurrencyByCountryId,
  short: getCurrencyShort,
  full: getCurrencyFull,
  get list() {
    return countries;
  }
};
