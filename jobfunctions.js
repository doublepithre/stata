"use strict";

const dbrecords = [];

const jobFunctions = {
  others: 94,
  "writing and editing": 93,
  sports: 92,
  management: 91,
  entertainment: 90,
  security: 46,
  support: 32,
  sales: 31,
  "research & development": 30,
  "real estate": 29,
  "quality assurance": 28,
  "purchasing & procurement": 27,
  "program & product management": 26,
  operations: 25,
  "military & protective services": 24,
  "media & communications": 23,
  marketing: 22,
  legal: 21,
  "insurance and risk management": 20,
  "information technology": 19,
  "human resources": 18,
  hospitality: 17,
  "healthcare services": 16,
  "food services": 15,
  finance: 14,
  entrepreneurship: 13,
  engineering: 12,
  education: 11,
  "customer service": 10,
  consulting: 9,
  "community & social services": 8,
  "c-level management": 7,
  "business development": 6,
  "board member": 5,
  "arts and design": 4,
  advertising: 3,
  administrative: 2,
  accounting: 1
};

const getJobFunction = (input, t) => {
  const linput = (input + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      return jobFunctions[linput] || 94;
    } else {
      return 94;
    }
  }
  if (t === "name") {
    if (typeof input === "number") {
      return jobFunctions[Number(linput)] || "others";
    } else {
      return dbrecords.includes(linput) ? linput : "others";
    }
  }
};

module.exports = {
  name: input => getJobFunction(input, "name"),
  id: input => getJobFunction(input, "id"),
  get list() {
    return jobFunctions;
  }
};
