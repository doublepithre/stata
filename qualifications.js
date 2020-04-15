"use strict";

const dbterms = [
  "early childhood education",
  "primary education",
  "lower secondary education",
  "upper secondary education",
  "high school or equivalent",
  "certification",
  "vocational",
  "diploma",
  "associate degree",
  "bachelor's degree",
  "master's degree",
  "phd",
  "medicine"
];

const qualificationTypes = [
  {
    typeId: 1,
    typeName: "Early Childhood Education"
  },
  {
    typeId: 2,
    typeName: "Primary Education"
  },
  {
    typeId: 3,
    typeName: "Lower Secondary Education"
  },
  {
    typeId: 4,
    typeName: "Upper Secondary Education"
  },
  {
    typeId: 5,
    typeName: "High School or Equivalent"
  },
  {
    typeId: 6,
    typeName: "Certification"
  },
  {
    typeId: 7,
    typeName: "Vocational"
  },
  {
    typeId: 8,
    typeName: "Diploma"
  },
  {
    typeId: 9,
    typeName: "Associate Degree"
  },
  {
    typeId: 10,
    typeName: "Bachelor's Degree"
  },
  {
    typeId: 11,
    typeName: "Master's Degree"
  },
  {
    typeId: 12,
    typeName: "PhD"
  },
  {
    typeId: 13,
    typeName: "Medicine"
  }
];

const qualifications = {
  "early childhood education": 1,
  "primary education": 2,
  "lower secondary education": 3,
  "upper secondary education": 4,
  "high school or equivalent": 5,
  certification: 6,
  vocational: 7,
  diploma: 8,
  "associate degree": 9,
  "bachelor's degree": 10,
  "master's degree": 11,
  phd: 12,
  medicine: 13,

  "bachelors degree": 10,
  "masters degree": 11
};

const getQualification = (input, t) => {
  const linput = (input + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      return qualifications[linput] || 10;
    } else {
      return 10;
    }
  }
  if (t === "name") {
    if (typeof input === "number") {
      return qualifications[Number(linput)] || "bachelor's degree";
    } else {
      return dbterms.includes(linput) ? linput : "bachelor's degree";
    }
  }
};

module.exports = {
  name: input => getQualification(input, "name"),
  id: input => getQualification(input, "id"),
  get list() {
    return terms;
  }
};
