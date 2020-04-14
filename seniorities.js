"use strict";

const dbitems = [
  "0 year",
  "1 ~ 5 years",
  "5 ~ 10 years",
  "10 ~ 15 years",
  "15 ~ 20 years",
  "20+ years"
];

const seniorityNames = {
  1: "0 year",
  2: "1 ~ 5 years",
  3: "5 ~ 10 years",
  4: "10 ~ 15 years",
  5: "15 ~ 20 years",
  6: "20+ years",
};

const seniorityIds = {
  "0 year": 1,
  "1 ~ 5 years": 2,
  "5 ~ 10 years": 3,
  "10 ~ 15 years": 4,
  "15 ~ 20 years": 5,
  "20+ years": 6,

  // infer
  "fresher": 1,
  "freshers": 1,
  "no experience": 1,
};

const getSeniority = (input, t) => {
  const linput = (input + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      return seniorityIds[linput] || 2;
    } else {
      return 2;
    }
  }
  if (t === "name") {
    if (typeof input === "number") {
      return seniorityNames[Number(linput)] || "1 ~ 5 years";
    } else {
      return dbitems.includes(linput) ? linput : "1 ~ 5 years";
    }
  }
};

// const re = new RegExp(/[0-9][0-9+]?[ ]+?year/gi)
// /[0-9A-Z]*[ +]*[ ]+?year/
// while(match = re.exec(str)){
//   console.log(match, ' found at : ', match.index); 
// }

module.exports = {
  name: input => getSeniority(input, "name"),
  id: input => getSeniority(input, "id"),
  get list() {
    return seniorityNames;
  }
};
