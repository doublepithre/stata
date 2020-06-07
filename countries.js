"use strict";

const countries = [
  {
    countryId: 1,
    countryShort: "AF",
    countryFull: "Afghanistan",
    countryCode: "+93"
  },
  {
    countryId: 2,
    countryShort: "AX",
    countryFull: "Åland Islands",
    countryCode: "+358"
  },
  {
    countryId: 3,
    countryShort: "AL",
    countryFull: "Albania",
    countryCode: "+355"
  },
  {
    countryId: 4,
    countryShort: "DZ",
    countryFull: "Algeria",
    countryCode: "+213"
  },
  {
    countryId: 5,
    countryShort: "AS",
    countryFull: "American Samoa",
    countryCode: "+1684"
  },
  {
    countryId: 6,
    countryShort: "AD",
    countryFull: "Andorra",
    countryCode: "+376"
  },
  {
    countryId: 7,
    countryShort: "AO",
    countryFull: "Angola",
    countryCode: "+244"
  },
  {
    countryId: 8,
    countryShort: "AI",
    countryFull: "Anguilla",
    countryCode: "+1264"
  },
  {
    countryId: 9,
    countryShort: "AN",
    countryFull: "Netherlands Antilles",
    countryCode: "+599"
  },
  {
    countryId: 10,
    countryShort: "AQ",
    countryFull: "Antarctica",
    countryCode: "+672"
  },
  {
    countryId: 11,
    countryShort: "AG",
    countryFull: "Antigua and Barbuda",
    countryCode: "+1268"
  },
  {
    countryId: 12,
    countryShort: "AR",
    countryFull: "Argentina",
    countryCode: "+54"
  },
  {
    countryId: 13,
    countryShort: "AM",
    countryFull: "Armenia",
    countryCode: "+374"
  },
  {
    countryId: 14,
    countryShort: "AW",
    countryFull: "Aruba",
    countryCode: "+297"
  },
  {
    countryId: 15,
    countryShort: "AU",
    countryFull: "Australia",
    countryCode: "+61"
  },
  {
    countryId: 16,
    countryShort: "AT",
    countryFull: "Austria",
    countryCode: "+43"
  },
  {
    countryId: 17,
    countryShort: "AZ",
    countryFull: "Azerbaijan",
    countryCode: "+994"
  },
  {
    countryId: 18,
    countryShort: "BS",
    countryFull: "Bahamas",
    countryCode: "+1242"
  },
  {
    countryId: 19,
    countryShort: "BH",
    countryFull: "Bahrain",
    countryCode: "+973"
  },
  {
    countryId: 20,
    countryShort: "BD",
    countryFull: "Bangladesh",
    countryCode: "+880"
  },
  {
    countryId: 21,
    countryShort: "BB",
    countryFull: "Barbados",
    countryCode: "+1246"
  },
  {
    countryId: 22,
    countryShort: "BY",
    countryFull: "Belarus",
    countryCode: "+375"
  },
  {
    countryId: 23,
    countryShort: "BE",
    countryFull: "Belgium",
    countryCode: "+32"
  },
  {
    countryId: 24,
    countryShort: "BZ",
    countryFull: "Belize",
    countryCode: "+501"
  },
  {
    countryId: 25,
    countryShort: "BJ",
    countryFull: "Benin",
    countryCode: "+229"
  },
  {
    countryId: 26,
    countryShort: "BM",
    countryFull: "Bermuda",
    countryCode: "+1441"
  },
  {
    countryId: 27,
    countryShort: "BT",
    countryFull: "Bhutan",
    countryCode: "+975"
  },
  {
    countryId: 28,
    countryShort: "BO",
    countryFull: "Bolivia, Plurinational State of",
    countryCode: "+591"
  },
  {
    countryId: 29,
    countryShort: "BQ",
    countryFull: "Bonaire, Sint Eustatius and Saba",
    countryCode: "+599"
  },
  {
    countryId: 30,
    countryShort: "BA",
    countryFull: "Bosnia and Herzegovina",
    countryCode: "+387"
  },
  {
    countryId: 31,
    countryShort: "BW",
    countryFull: "Botswana",
    countryCode: "+267"
  },
  {
    countryId: 32,
    countryShort: "BV",
    countryFull: "Bouvet Island",
    countryCode: "+55"
  },
  {
    countryId: 33,
    countryShort: "BR",
    countryFull: "Brazil",
    countryCode: "+55"
  },
  {
    countryId: 34,
    countryShort: "IO",
    countryFull: "British Indian Ocean Territory",
    countryCode: "+246"
  },
  {
    countryId: 35,
    countryShort: "BN",
    countryFull: "Brunei Darussalam",
    countryCode: "+673"
  },
  {
    countryId: 36,
    countryShort: "BG",
    countryFull: "Bulgaria",
    countryCode: "+359"
  },
  {
    countryId: 37,
    countryShort: "BF",
    countryFull: "Burkina Faso",
    countryCode: "+226"
  },
  {
    countryId: 38,
    countryShort: "BI",
    countryFull: "Burundi",
    countryCode: "+257"
  },
  {
    countryId: 39,
    countryShort: "KH",
    countryFull: "Cambodia",
    countryCode: "+855"
  },
  {
    countryId: 40,
    countryShort: "CM",
    countryFull: "Cameroon",
    countryCode: "+237"
  },
  {
    countryId: 41,
    countryShort: "CA",
    countryFull: "Canada",
    countryCode: "+1"
  },
  {
    countryId: 42,
    countryShort: "CV",
    countryFull: "Cape Verde",
    countryCode: "+238"
  },
  {
    countryId: 43,
    countryShort: "KY",
    countryFull: "Cayman Islands",
    countryCode: "+1345"
  },
  {
    countryId: 44,
    countryShort: "CF",
    countryFull: "Central African Republic",
    countryCode: "+236"
  },
  {
    countryId: 45,
    countryShort: "TD",
    countryFull: "Chad",
    countryCode: "+235"
  },
  {
    countryId: 46,
    countryShort: "CL",
    countryFull: "Chile",
    countryCode: "+56"
  },
  {
    countryId: 47,
    countryShort: "CN",
    countryFull: "China",
    countryCode: "+86"
  },
  {
    countryId: 48,
    countryShort: "CX",
    countryFull: "Christmas Island",
    countryCode: "+61"
  },
  {
    countryId: 49,
    countryShort: "CC",
    countryFull: "Cocos (Keeling) Islands",
    countryCode: "+672"
  },
  {
    countryId: 50,
    countryShort: "CO",
    countryFull: "Colombia",
    countryCode: "+57"
  },
  {
    countryId: 51,
    countryShort: "KM",
    countryFull: "Comoros",
    countryCode: "+269"
  },
  {
    countryId: 52,
    countryShort: "CG",
    countryFull: "Congo",
    countryCode: "+242"
  },
  {
    countryId: 53,
    countryShort: "CD",
    countryFull: "Congo, the Democratic Republic of the",
    countryCode: "+242"
  },
  {
    countryId: 54,
    countryShort: "CK",
    countryFull: "Cook Islands",
    countryCode: "+682"
  },
  {
    countryId: 55,
    countryShort: "CR",
    countryFull: "Costa Rica",
    countryCode: "+506"
  },
  {
    countryId: 56,
    countryShort: "CI",
    countryFull: "Côte d'Ivoire",
    countryCode: "+225"
  },
  {
    countryId: 57,
    countryShort: "HR",
    countryFull: "Croatia",
    countryCode: "+385"
  },
  {
    countryId: 58,
    countryShort: "CU",
    countryFull: "Cuba",
    countryCode: "+53"
  },
  {
    countryId: 59,
    countryShort: "CW",
    countryFull: "Curaçao",
    countryCode: "+599"
  },
  {
    countryId: 60,
    countryShort: "CY",
    countryFull: "Cyprus",
    countryCode: "+357"
  },
  {
    countryId: 61,
    countryShort: "CZ",
    countryFull: "Czech Republic",
    countryCode: "+420"
  },
  {
    countryId: 62,
    countryShort: "DK",
    countryFull: "Denmark",
    countryCode: "+45"
  },
  {
    countryId: 63,
    countryShort: "DJ",
    countryFull: "Djibouti",
    countryCode: "+253"
  },
  {
    countryId: 64,
    countryShort: "DM",
    countryFull: "Dominica",
    countryCode: "+1767"
  },
  {
    countryId: 65,
    countryShort: "DO",
    countryFull: "Dominican Republic",
    countryCode: "+1809"
  },
  {
    countryId: 66,
    countryShort: "EC",
    countryFull: "Ecuador",
    countryCode: "+593"
  },
  {
    countryId: 67,
    countryShort: "EG",
    countryFull: "Egypt",
    countryCode: "+20"
  },
  {
    countryId: 68,
    countryShort: "EH",
    countryFull: "Western Sahara",
    countryCode: "+212"
  },
  {
    countryId: 69,
    countryShort: "SV",
    countryFull: "El Salvador",
    countryCode: "+503"
  },
  {
    countryId: 70,
    countryShort: "GQ",
    countryFull: "Equatorial Guinea",
    countryCode: "+240"
  },
  {
    countryId: 71,
    countryShort: "ER",
    countryFull: "Eritrea",
    countryCode: "+291"
  },
  {
    countryId: 72,
    countryShort: "EE",
    countryFull: "Estonia",
    countryCode: "+372"
  },
  {
    countryId: 73,
    countryShort: "ET",
    countryFull: "Ethiopia",
    countryCode: "+251"
  },
  {
    countryId: 74,
    countryShort: "FK",
    countryFull: "Falkland Islands (Malvinas)",
    countryCode: "+500"
  },
  {
    countryId: 75,
    countryShort: "FO",
    countryFull: "Faroe Islands",
    countryCode: "+298"
  },
  {
    countryId: 76,
    countryShort: "FJ",
    countryFull: "Fiji",
    countryCode: "+679"
  },
  {
    countryId: 77,
    countryShort: "FI",
    countryFull: "Finland",
    countryCode: "+358"
  },
  {
    countryId: 78,
    countryShort: "FR",
    countryFull: "France",
    countryCode: "+33"
  },
  {
    countryId: 79,
    countryShort: "GF",
    countryFull: "French Guiana",
    countryCode: "+594"
  },
  {
    countryId: 80,
    countryShort: "PF",
    countryFull: "French Polynesia",
    countryCode: "+689"
  },
  {
    countryId: 81,
    countryShort: "TF",
    countryFull: "French Southern Territories",
    countryCode: "+262"
  },
  {
    countryId: 82,
    countryShort: "GA",
    countryFull: "Gabon",
    countryCode: "+241"
  },
  {
    countryId: 83,
    countryShort: "GM",
    countryFull: "Gambia",
    countryCode: "+220"
  },
  {
    countryId: 84,
    countryShort: "GE",
    countryFull: "Georgia",
    countryCode: "+995"
  },
  {
    countryId: 85,
    countryShort: "DE",
    countryFull: "Germany",
    countryCode: "+49"
  },
  {
    countryId: 86,
    countryShort: "GH",
    countryFull: "Ghana",
    countryCode: "+233"
  },
  {
    countryId: 87,
    countryShort: "GI",
    countryFull: "Gibraltar",
    countryCode: "+350"
  },
  {
    countryId: 88,
    countryShort: "GR",
    countryFull: "Greece",
    countryCode: "+30"
  },
  {
    countryId: 89,
    countryShort: "GL",
    countryFull: "Greenland",
    countryCode: "+299"
  },
  {
    countryId: 90,
    countryShort: "GD",
    countryFull: "Grenada",
    countryCode: "+1473"
  },
  {
    countryId: 91,
    countryShort: "GP",
    countryFull: "Guadeloupe",
    countryCode: "+590"
  },
  {
    countryId: 92,
    countryShort: "GU",
    countryFull: "Guam",
    countryCode: "+1671"
  },
  {
    countryId: 93,
    countryShort: "GT",
    countryFull: "Guatemala",
    countryCode: "+502"
  },
  {
    countryId: 94,
    countryShort: "GG",
    countryFull: "Guernsey",
    countryCode: "+44"
  },
  {
    countryId: 95,
    countryShort: "GN",
    countryFull: "Guinea",
    countryCode: "+224"
  },
  {
    countryId: 96,
    countryShort: "GW",
    countryFull: "Guinea-Bissau",
    countryCode: "+245"
  },
  {
    countryId: 97,
    countryShort: "GY",
    countryFull: "Guyana",
    countryCode: "+592"
  },
  {
    countryId: 98,
    countryShort: "HT",
    countryFull: "Haiti",
    countryCode: "+509"
  },
  {
    countryId: 99,
    countryShort: "HM",
    countryFull: "Heard Island and McDonald Islands",
    countryCode: "+672"
  },
  {
    countryId: 100,
    countryShort: "VA",
    countryFull: "Holy See (Vatican City State)",
    countryCode: "+39"
  },
  {
    countryId: 101,
    countryShort: "HN",
    countryFull: "Honduras",
    countryCode: "+504"
  },
  {
    countryId: 102,
    countryShort: "HK",
    countryFull: "Hong Kong (China)",
    countryCode: "+852"
  },
  {
    countryId: 102,
    countryShort: "HK",
    countryFull: "Hong Kong",
    countryCode: "+852"
  },
  {
    countryId: 103,
    countryShort: "HU",
    countryFull: "Hungary",
    countryCode: "+36"
  },
  {
    countryId: 104,
    countryShort: "IS",
    countryFull: "Iceland",
    countryCode: "+354"
  },
  {
    countryId: 105,
    countryShort: "IN",
    countryFull: "India",
    countryCode: "+91"
  },
  {
    countryId: 106,
    countryShort: "ID",
    countryFull: "Indonesia",
    countryCode: "+62"
  },
  {
    countryId: 107,
    countryShort: "IR",
    countryFull: "Iran, Islamic Republic of",
    countryCode: "+98"
  },
  {
    countryId: 108,
    countryShort: "IQ",
    countryFull: "Iraq",
    countryCode: "+964"
  },
  {
    countryId: 109,
    countryShort: "IE",
    countryFull: "Ireland",
    countryCode: "+353"
  },
  {
    countryId: 110,
    countryShort: "IM",
    countryFull: "Isle of Man",
    countryCode: "+44"
  },
  {
    countryId: 111,
    countryShort: "IL",
    countryFull: "Israel",
    countryCode: "+972"
  },
  {
    countryId: 112,
    countryShort: "IT",
    countryFull: "Italy",
    countryCode: "+39"
  },
  {
    countryId: 113,
    countryShort: "JM",
    countryFull: "Jamaica",
    countryCode: "+1876"
  },
  {
    countryId: 114,
    countryShort: "JP",
    countryFull: "Japan",
    countryCode: "+81"
  },
  {
    countryId: 115,
    countryShort: "JE",
    countryFull: "Jersey",
    countryCode: "+44"
  },
  {
    countryId: 116,
    countryShort: "JO",
    countryFull: "Jordan",
    countryCode: "+962"
  },
  {
    countryId: 117,
    countryShort: "KZ",
    countryFull: "Kazakhstan",
    countryCode: "+7"
  },
  {
    countryId: 118,
    countryShort: "KE",
    countryFull: "Kenya",
    countryCode: "+254"
  },
  {
    countryId: 119,
    countryShort: "KI",
    countryFull: "Kiribati",
    countryCode: "+686"
  },
  {
    countryId: 120,
    countryShort: "KP",
    countryFull: "Korea, Democratic People's Republic of",
    countryCode: "+850"
  },
  {
    countryId: 121,
    countryShort: "KR",
    countryFull: "Korea, Republic of",
    countryCode: "+82"
  },
  {
    countryId: 122,
    countryShort: "KW",
    countryFull: "Kuwait",
    countryCode: "+965"
  },
  {
    countryId: 123,
    countryShort: "KG",
    countryFull: "Kyrgyzstan",
    countryCode: "+996"
  },
  {
    countryId: 124,
    countryShort: "LA",
    countryFull: "Lao People's Democratic Republic",
    countryCode: "+856"
  },
  {
    countryId: 125,
    countryShort: "LV",
    countryFull: "Latvia",
    countryCode: "+371"
  },
  {
    countryId: 126,
    countryShort: "LB",
    countryFull: "Lebanon",
    countryCode: "+961"
  },
  {
    countryId: 127,
    countryShort: "LS",
    countryFull: "Lesotho",
    countryCode: "+266"
  },
  {
    countryId: 128,
    countryShort: "LR",
    countryFull: "Liberia",
    countryCode: "+231"
  },
  {
    countryId: 129,
    countryShort: "LY",
    countryFull: "Libya",
    countryCode: "+218"
  },
  {
    countryId: 130,
    countryShort: "LI",
    countryFull: "Liechtenstein",
    countryCode: "+423"
  },
  {
    countryId: 131,
    countryShort: "LT",
    countryFull: "Lithuania",
    countryCode: "+370"
  },
  {
    countryId: 132,
    countryShort: "LU",
    countryFull: "Luxembourg",
    countryCode: "+352"
  },
  {
    countryId: 133,
    countryShort: "MO",
    countryFull: "Macau (China)",
    countryCode: "+853"
  },
  {
    countryId: 134,
    countryShort: "MK",
    countryFull: "Macedonia, Republic of",
    countryCode: "+389"
  },
  {
    countryId: 135,
    countryShort: "MG",
    countryFull: "Madagascar",
    countryCode: "+261"
  },
  {
    countryId: 136,
    countryShort: "MW",
    countryFull: "Malawi",
    countryCode: "+265"
  },
  {
    countryId: 137,
    countryShort: "MY",
    countryFull: "Malaysia",
    countryCode: "+60"
  },
  {
    countryId: 138,
    countryShort: "MV",
    countryFull: "Maldives",
    countryCode: "+960"
  },
  {
    countryId: 139,
    countryShort: "ML",
    countryFull: "Mali",
    countryCode: "+223"
  },
  {
    countryId: 140,
    countryShort: "MT",
    countryFull: "Malta",
    countryCode: "+356"
  },
  {
    countryId: 141,
    countryShort: "MH",
    countryFull: "Marshall Islands",
    countryCode: "+692"
  },
  {
    countryId: 142,
    countryShort: "MQ",
    countryFull: "Martinique",
    countryCode: "+596"
  },
  {
    countryId: 143,
    countryShort: "MR",
    countryFull: "Mauritania",
    countryCode: "+222"
  },
  {
    countryId: 144,
    countryShort: "MU",
    countryFull: "Mauritius",
    countryCode: "+230"
  },
  {
    countryId: 145,
    countryShort: "YT",
    countryFull: "Mayotte",
    countryCode: "+269"
  },
  {
    countryId: 146,
    countryShort: "MX",
    countryFull: "Mexico",
    countryCode: "+52"
  },
  {
    countryId: 147,
    countryShort: "FM",
    countryFull: "Micronesia, Federated States of",
    countryCode: "+691"
  },
  {
    countryId: 148,
    countryShort: "MD",
    countryFull: "Moldova, Republic of",
    countryCode: "+373"
  },
  {
    countryId: 149,
    countryShort: "MC",
    countryFull: "Monaco",
    countryCode: "+377"
  },
  {
    countryId: 150,
    countryShort: "MN",
    countryFull: "Mongolia",
    countryCode: "+976"
  },
  {
    countryId: 151,
    countryShort: "ME",
    countryFull: "Montenegro",
    countryCode: "+382"
  },
  {
    countryId: 152,
    countryShort: "MS",
    countryFull: "Montserrat",
    countryCode: "+1664"
  },
  {
    countryId: 153,
    countryShort: "MA",
    countryFull: "Morocco",
    countryCode: "+212"
  },
  {
    countryId: 154,
    countryShort: "MZ",
    countryFull: "Mozambique",
    countryCode: "+258"
  },
  {
    countryId: 155,
    countryShort: "MM",
    countryFull: "Myanmar",
    countryCode: "+95"
  },
  {
    countryId: 156,
    countryShort: "NA",
    countryFull: "Namibia",
    countryCode: "+264"
  },
  {
    countryId: 157,
    countryShort: "NR",
    countryFull: "Nauru",
    countryCode: "+674"
  },
  {
    countryId: 158,
    countryShort: "NP",
    countryFull: "Nepal",
    countryCode: "+977"
  },
  {
    countryId: 159,
    countryShort: "NL",
    countryFull: "Netherlands",
    countryCode: "+31"
  },
  {
    countryId: 160,
    countryShort: "NC",
    countryFull: "New Caledonia",
    countryCode: "+687"
  },
  {
    countryId: 161,
    countryShort: "NZ",
    countryFull: "New Zealand",
    countryCode: "+64"
  },
  {
    countryId: 162,
    countryShort: "NI",
    countryFull: "Nicaragua",
    countryCode: "+505"
  },
  {
    countryId: 163,
    countryShort: "NE",
    countryFull: "Niger",
    countryCode: "+227"
  },
  {
    countryId: 164,
    countryShort: "NG",
    countryFull: "Nigeria",
    countryCode: "+234"
  },
  {
    countryId: 165,
    countryShort: "NU",
    countryFull: "Niue",
    countryCode: "+683"
  },
  {
    countryId: 166,
    countryShort: "NF",
    countryFull: "Norfolk Island",
    countryCode: "+672"
  },
  {
    countryId: 167,
    countryShort: "MP",
    countryFull: "Northern Mariana Islands",
    countryCode: "+1670"
  },
  {
    countryId: 168,
    countryShort: "NO",
    countryFull: "Norway",
    countryCode: "+47"
  },
  {
    countryId: 169,
    countryShort: "OM",
    countryFull: "Oman",
    countryCode: "+968"
  },
  {
    countryId: 170,
    countryShort: "PK",
    countryFull: "Pakistan",
    countryCode: "+92"
  },
  {
    countryId: 171,
    countryShort: "PW",
    countryFull: "Palau",
    countryCode: "+680"
  },
  {
    countryId: 172,
    countryShort: "PS",
    countryFull: "Palestine, State of",
    countryCode: "+970"
  },
  {
    countryId: 173,
    countryShort: "PA",
    countryFull: "Panama",
    countryCode: "+507"
  },
  {
    countryId: 174,
    countryShort: "PG",
    countryFull: "Papua New Guinea",
    countryCode: "+675"
  },
  {
    countryId: 175,
    countryShort: "PY",
    countryFull: "Paraguay",
    countryCode: "+595"
  },
  {
    countryId: 176,
    countryShort: "PE",
    countryFull: "Peru",
    countryCode: "+51"
  },
  {
    countryId: 177,
    countryShort: "PH",
    countryFull: "Philippines",
    countryCode: "+63"
  },
  {
    countryId: 178,
    countryShort: "PN",
    countryFull: "Pitcairn",
    countryCode: "+64"
  },
  {
    countryId: 179,
    countryShort: "PL",
    countryFull: "Poland",
    countryCode: "+48"
  },
  {
    countryId: 180,
    countryShort: "PT",
    countryFull: "Portugal",
    countryCode: "+351"
  },
  {
    countryId: 181,
    countryShort: "PR",
    countryFull: "Puerto Rico",
    countryCode: "+1787"
  },
  {
    countryId: 182,
    countryShort: "QA",
    countryFull: "Qatar",
    countryCode: "+974"
  },
  {
    countryId: 183,
    countryShort: "RE",
    countryFull: "Réunion",
    countryCode: "+262"
  },
  {
    countryId: 184,
    countryShort: "RO",
    countryFull: "Romania",
    countryCode: "+40"
  },
  {
    countryId: 185,
    countryShort: "RU",
    countryFull: "Russia",
    countryCode: "+70"
  },
  {
    countryId: 186,
    countryShort: "RW",
    countryFull: "Rwanda",
    countryCode: "+250"
  },
  {
    countryId: 187,
    countryShort: "BL",
    countryFull: "Saint Barthélemy",
    countryCode: "+590"
  },
  {
    countryId: 188,
    countryShort: "SH",
    countryFull: "Saint Helena, Ascension and Tristan da Cunha",
    countryCode: "+290"
  },
  {
    countryId: 189,
    countryShort: "KN",
    countryFull: "Saint Kitts and Nevis",
    countryCode: "+1869"
  },
  {
    countryId: 190,
    countryShort: "LC",
    countryFull: "Saint Lucia",
    countryCode: "+1758"
  },
  {
    countryId: 191,
    countryShort: "MF",
    countryFull: "Saint Martin (French part)",
    countryCode: "+1590"
  },
  {
    countryId: 192,
    countryShort: "PM",
    countryFull: "Saint Pierre and Miquelon",
    countryCode: "+508"
  },
  {
    countryId: 193,
    countryShort: "VC",
    countryFull: "Saint Vincent and the Grenadines",
    countryCode: "+1784"
  },
  {
    countryId: 194,
    countryShort: "WS",
    countryFull: "Samoa",
    countryCode: "+684"
  },
  {
    countryId: 195,
    countryShort: "SM",
    countryFull: "San Marino",
    countryCode: "+378"
  },
  {
    countryId: 196,
    countryShort: "ST",
    countryFull: "São Tomé and Príncipe",
    countryCode: "+239"
  },
  {
    countryId: 197,
    countryShort: "SA",
    countryFull: "Saudi Arabia",
    countryCode: "+966"
  },
  {
    countryId: 198,
    countryShort: "SN",
    countryFull: "Senegal",
    countryCode: "+221"
  },
  {
    countryId: 199,
    countryShort: "RS",
    countryFull: "Serbia",
    countryCode: "+381"
  },
  {
    countryId: 200,
    countryShort: "SC",
    countryFull: "Seychelles",
    countryCode: "+248"
  },
  {
    countryId: 201,
    countryShort: "SL",
    countryFull: "Sierra Leone",
    countryCode: "+232"
  },
  {
    countryId: 202,
    countryShort: "SG",
    countryFull: "Singapore",
    countryCode: "+65"
  },
  {
    countryId: 203,
    countryShort: "SX",
    countryFull: "Sint Maarten (Dutch part)",
    countryCode: "+1721"
  },
  {
    countryId: 204,
    countryShort: "SK",
    countryFull: "Slovakia",
    countryCode: "+421"
  },
  {
    countryId: 205,
    countryShort: "SI",
    countryFull: "Slovenia",
    countryCode: "+386"
  },
  {
    countryId: 206,
    countryShort: "SB",
    countryFull: "Solomon Islands",
    countryCode: "+677"
  },
  {
    countryId: 207,
    countryShort: "SO",
    countryFull: "Somalia",
    countryCode: "+252"
  },
  {
    countryId: 208,
    countryShort: "ZA",
    countryFull: "South Africa",
    countryCode: "+27"
  },
  {
    countryId: 209,
    countryShort: "GS",
    countryFull: "South Georgia and the South Sandwich Islands",
    countryCode: "+500"
  },
  {
    countryId: 210,
    countryShort: "SS",
    countryFull: "South Sudan",
    countryCode: "+211"
  },
  {
    countryId: 211,
    countryShort: "ES",
    countryFull: "Spain",
    countryCode: "+34"
  },
  {
    countryId: 212,
    countryShort: "LK",
    countryFull: "Sri Lanka",
    countryCode: "+94"
  },
  {
    countryId: 213,
    countryShort: "SD",
    countryFull: "Sudan",
    countryCode: "+249"
  },
  {
    countryId: 214,
    countryShort: "SR",
    countryFull: "Suriname",
    countryCode: "+597"
  },
  {
    countryId: 215,
    countryShort: "SJ",
    countryFull: "Svalbard and Jan Mayen",
    countryCode: "+47"
  },
  {
    countryId: 216,
    countryShort: "SZ",
    countryFull: "Swaziland",
    countryCode: "+268"
  },
  {
    countryId: 217,
    countryShort: "SE",
    countryFull: "Sweden",
    countryCode: "+46"
  },
  {
    countryId: 218,
    countryShort: "CH",
    countryFull: "Switzerland",
    countryCode: "+41"
  },
  {
    countryId: 219,
    countryShort: "SY",
    countryFull: "Syrian Arab Republic",
    countryCode: "+963"
  },
  {
    countryId: 220,
    countryShort: "TP",
    countryFull: "East Timor",
    countryCode: "+670"
  },
  {
    countryId: 221,
    countryShort: "TW",
    countryFull: "Taiwan, Province of China",
    countryCode: "+886"
  },
  {
    countryId: 222,
    countryShort: "TJ",
    countryFull: "Tajikistan",
    countryCode: "+992"
  },
  {
    countryId: 223,
    countryShort: "TZ",
    countryFull: "Tanzania, United Republic of",
    countryCode: "+255"
  },
  {
    countryId: 224,
    countryShort: "TH",
    countryFull: "Thailand",
    countryCode: "+66"
  },
  {
    countryId: 225,
    countryShort: "TL",
    countryFull: "Timor-Leste",
    countryCode: "+670"
  },
  {
    countryId: 226,
    countryShort: "TG",
    countryFull: "Togo",
    countryCode: "+228"
  },
  {
    countryId: 227,
    countryShort: "TK",
    countryFull: "Tokelau",
    countryCode: "+690"
  },
  {
    countryId: 228,
    countryShort: "TO",
    countryFull: "Tonga",
    countryCode: "+676"
  },
  {
    countryId: 229,
    countryShort: "TT",
    countryFull: "Trinidad and Tobago",
    countryCode: "+1868"
  },
  {
    countryId: 230,
    countryShort: "TN",
    countryFull: "Tunisia",
    countryCode: "+216"
  },
  {
    countryId: 231,
    countryShort: "TR",
    countryFull: "Turkey",
    countryCode: "+90"
  },
  {
    countryId: 232,
    countryShort: "TM",
    countryFull: "Turkmenistan",
    countryCode: "+7370"
  },
  {
    countryId: 233,
    countryShort: "TC",
    countryFull: "Turks and Caicos Islands",
    countryCode: "+1649"
  },
  {
    countryId: 234,
    countryShort: "TV",
    countryFull: "Tuvalu",
    countryCode: "+688"
  },
  {
    countryId: 235,
    countryShort: "UG",
    countryFull: "Uganda",
    countryCode: "+256"
  },
  {
    countryId: 236,
    countryShort: "UA",
    countryFull: "Ukraine",
    countryCode: "+380"
  },
  {
    countryId: 237,
    countryShort: "AE",
    countryFull: "United Arab Emirates",
    countryCode: "+971"
  },
  {
    countryId: 238,
    countryShort: "GB",
    countryFull: "United Kingdom",
    countryCode: "+44"
  },
  {
    countryId: 239,
    countryShort: "US",
    countryFull: "United States",
    countryCode: "+1"
  },
  {
    countryId: 240,
    countryShort: "UM",
    countryFull: "United States Minor Outlying Islands",
    countryCode: "+1"
  },
  {
    countryId: 241,
    countryShort: "UY",
    countryFull: "Uruguay",
    countryCode: "+598"
  },
  {
    countryId: 242,
    countryShort: "UZ",
    countryFull: "Uzbekistan",
    countryCode: "+998"
  },
  {
    countryId: 243,
    countryShort: "VU",
    countryFull: "Vanuatu",
    countryCode: "+678"
  },
  {
    countryId: 244,
    countryShort: "VE",
    countryFull: "Venezuela, Bolivarian Republic of",
    countryCode: "+58"
  },
  {
    countryId: 245,
    countryShort: "VN",
    countryFull: "Vietnam",
    countryCode: "+84"
  },
  {
    countryId: 246,
    countryShort: "VG",
    countryFull: "Virgin Islands, British",
    countryCode: "+1284"
  },
  {
    countryId: 247,
    countryShort: "VI",
    countryFull: "Virgin Islands, U.S.",
    countryCode: "+1340"
  },
  {
    countryId: 248,
    countryShort: "WF",
    countryFull: "Wallis and Futuna",
    countryCode: "+681"
  },
  {
    countryId: 249,
    countryShort: "XA",
    countryFull: "External Territories of Australia",
    countryCode: "+61"
  },
  {
    countryId: 250,
    countryShort: "XG",
    countryFull: "Smaller Territories of the UK",
    countryCode: "+44"
  },
  {
    countryId: 251,
    countryShort: "YE",
    countryFull: "Yemen",
    countryCode: "+967"
  },
  {
    countryId: 252,
    countryShort: "YU",
    countryFull: "Yugoslavia",
    countryCode: "+38"
  },
  {
    countryId: 253,
    countryShort: "ZM",
    countryFull: "Zambia",
    countryCode: "+260"
  },
  {
    countryId: 254,
    countryShort: "ZW",
    countryFull: "Zimbabwe",
    countryCode: "+263"
  },
  {
    countryId: 263,
    countryShort: "<UNK>",
    countryFull: "<Unknown>",
    countryCode: null
  },
  {
    countryId: 265,
    countryShort: "UNKN",
    countryFull: "Unkn",
    countryCode: null
  },
  {
    countryId: 266,
    countryShort: "UNKNO",
    countryFull: "Unknown",
    countryCode: null
  }
];

const uc = {
  countryId: 263,
  countryShort: "<UNK>",
  countryFull: "<Unknown>",
  countryCode: null
};

const getCountryObj = input => {
  if (!input) {
    return null;
  }
  if (!isNaN(Number(input))) {
    const f = countries.filter(c => Number(c.countryId) === Number(input));
    return f[0] ? f[0] : uc;
  } else {
    if (input && input.length > 1) {
      const linput = (input + "").toLowerCase().trim();
      if (linput.length === 2) {
        const f = countries.filter(
          c => c.countryShort.toLowerCase() === linput
        );
        return f[0] ? f[0] : uc;
      } else {
        const f = countries.filter(c => c.countryFull.toLowerCase() === linput);
        return f[0] ? f[0] : uc;
      }
    }
  }
  return uc;
};

const getCountryId = input => {
  const o = getCountryObj(input);
  return o.countryId;
};

const getCountryCode = input => {
  const o = getCountryObj(input);
  return o.countryCode;
};

const getCountryFull = input => {
  const o = getCountryObj(input);
  return o.countryFull.toLowerCase();
};

const getCountryShort = input => {
  if (input && input.length === 2) {
    return input.toLowerCase();
  }
  const o = getCountryObj(input);
  return o.countryShort.toLowerCase();
};

module.exports = {
  get: getCountryObj,
  id: getCountryId,
  code: getCountryCode,
  short: getCountryShort,
  full: getCountryFull,
  get list() {
    return countries;
  }
};
