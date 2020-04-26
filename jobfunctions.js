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

const clientJobFunctions = {
  fastjobs: {
    "accounting / finance": 53,
    "admin & office services": 54,
    "advertising / promotions / events": 55,
    "arts / creative": 56,
    "audit / taxation": 57,
    "beauty / personal care": 58,
    "community, social services, religion and non-profit": 59,
    "corporate planning / business development": 60,
    "customer service": 61,
    "data / statistical analysis": 62,
    "design / specifications": 63,
    "education / training & development": 64,
    "engineering / technical": 65,
    "environment / health & safety": 66,
    "hospitality and tourism": 67,
    "human resources": 68,
    "information technology": 69,
    "legal / secretarial services": 70,
    "logistics / supply chain management": 71,
    management: 72,
    marketing: 73,
    "medical practitioners": 74,
    "merchandising / purchasing": 75,
    nursing: 76,
    operations: 77,
    others: 78,
    "pharmaceutical services": 79,
    "product development": 80,
    "production / manufacturing": 81,
    "project management": 82,
    "public relations / communications": 83,
    "quality control / assurance": 84,
    "r&d / sciences / laboratory": 85,
    "real estate / property management": 86,
    sales: 87,
    security: 88,
    "therapy / other healthcare": 89
  }
};

const getJobFunction = (input, client, t) => {
  const linput = (input + "").toLowerCase();
  const lclient = (client + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      if (!client) {
        return jobFunctions[linput] || 94;
      }
      const clientFunctions = clientJobFunctions[lclient] || {};
      if (lclient && !clientFunctions) {
        return 78;
      }
      return clientFunctions[linput] || 78;
    } else {
      return client ? 78 : 94;
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
  name: (input, client) => getJobFunction(input, client, "name"),
  id: (input, client) => getJobFunction(input, client, "id"),
  get list() {
    return jobFunctions;
  }
};
