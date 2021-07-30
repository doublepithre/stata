"use strict";

const dbrecords = [];

const jobFunctions = {
  accounting: 1,
  administrative: 2,
  advertising: 3,
  "arts and design": 4,
  "board member": 5,
  "business development": 6,
  "c-level management": 7,
  "community & social services": 8,
  consulting: 9,
  "customer service": 10,
  education: 11,
  engineering: 12,
  entrepreneurship: 13,
  finance: 14,
  "food services": 15,
  "healthcare services": 16,
  hospitality: 17,
  "human resources": 18,
  "information technology": 19,
  "insurance and risk management": 20,
  legal: 21,
  marketing: 22,
  "media & communications": 23,
  "military & protective services": 24,
  operations: 25,
  "program & product management": 26,
  "purchasing & procurement": 27,
  "quality assurance": 28,
  "real estate": 29,
  sales: 31,
  support: 32,
  security: 46,
  "research & development": 30,
  management: 84,
  entertainment: 85,
  sports: 86,
  "writing and editing": 87,
  others: 88,

  'accounting / finance': 1,
  'accounting/finance': 1,
  'administration': 2,
  'advertising and marketing': 3,
  'communications and media': 23,
  'education': 11,
  'energy': 88,
  'facilities': 88,
  'food & beverage': 15,
  'food&beverage': 15,
  'healthcare': 16,
  'human resource': 18,
  'hospitality': 17,
  'information technology': 19,
  'it': 19,
  'logistics': 88,
  'transport': 88,
  'others*': 88,
};

const clientJobFunctions = {
  fastjobs: {
    "accounting / finance": 47,
    "admin & office services": 48,
    "advertising / promotions / events": 49,
    "arts / creative": 50,
    "audit / taxation": 51,
    "beauty / personal care": 52,
    "community, social services, religion and non-profit": 53,
    "corporate planning / business development": 54,
    "customer service": 55,
    "data / statistical analysis": 56,
    "design / specifications": 57,
    "education / training & development": 58,
    "engineering / technical": 59,
    "environment / health & safety": 60,
    "hospitality and tourism": 61,
    "human resources": 62,
    "information technology": 63,
    "legal / secretarial services": 64,
    "logistics / supply chain management": 65,
    management: 66,
    marketing: 67,
    "medical practitioners": 68,
    "merchandising / purchasing": 69,
    nursing: 70,
    operations: 71,
    others: 72,
    "pharmaceutical services": 73,
    "product development": 74,
    "production / manufacturing": 75,
    "project management": 76,
    "public relations / communications": 77,
    "quality control / assurance": 78,
    "r&d / sciences / laboratory": 79,
    "real estate / property management": 80,
    sales: 81,
    security: 82,
    "therapy / other healthcare": 83
  }
};

const getJobFunction = (input, client, t) => {
  const linput = (input + "").toLowerCase();
  const lclient = (client + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      if (!client) {
        return jobFunctions[linput] || 72;
      }
      const clientFunctions = clientJobFunctions[lclient] || {};
      if (lclient && !clientFunctions) {
        return 72;
      }
      return clientFunctions[linput] || 72;
    } else {
      return client ? 72 : 72;
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
