'use strict';

const {
  hourTypes,
  termTypes,
  jobFunctionIds,
  currenciesData,
  personDocumentTypes,
  applicationSourceIds
} = require("./constants/static-data");

const getHourTypeId = hrName => {
  return hourTypes[hrName] || 1;
};

const getTermId = k => {
  return termTypes[k] || 1;
};

const getPersonDocumentType = docName => {
  const docNameLower = (docName && docName.toLowerCase()) || "others";
  return personDocumentTypes[docNameLower];
};

const getApplicationSourceId = sourceName => {
  const sourceNameLower = (sourceName && sourceName.toLowerCase()) || null;
  return applicationSourceIds[sourceNameLower];
};

module.exports = {
  getHourTypeId,
  getTermId,
  getPersonDocumentType,
  getApplicationSourceId,
};
