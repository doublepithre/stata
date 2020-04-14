"use strict";

const dbterms = [
  "vocational",
  "self-employed",
  "trainee",
  "freelance",
  "internship",
  "temporary",
  "contract",
  "permanent"
];

const terms = {
  vocational: 8,
  "self-employed": 7,
  trainee: 6,
  freelance: 5,
  internship: 4,
  temporary: 3,
  contract: 2,
  permanent: 1,

  8: "vocational",
  7: "self-employed",
  6: "trainee",
  5: "freelance",
  4: "internship",
  3: "temporary",
  2: "contract",
  1: "permanent",

  // infer
  intern: 4,
  "full-time": 1,
  "part-time": 2,
  part_time: 2,
  full_time: 1,
  "full time": 1,
  "fulltime": 1,
  "part time": 2,
  "parttime": 2,
  "intern-ship": 4,
  "intern ship": 4,
  "selfemployed": 7,
  volunteer: 3,
  undefined: 1,
};

const getTerm = (input, t) => {
  const linput = (input + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      return terms[linput] || 1;
    } else {
      return 1;
    }
  }
  if (t === "name") {
    if (typeof input === "number") {
      return terms[Number(linput)] || "permanent";
    } else {
      return dbterms.includes(linput) ? linput : "permanent";
    }
  }
};

module.exports = {
  name: input => getTerm(input, "name"),
  id: input => getTerm(input, "id"),
  get list() {
    return terms;
  }
};
