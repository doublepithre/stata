"use strict";

const personDocumentTypes = {
  others: 10,
  "passport/id": 9,
  "work portfolio": 8,
  "reference list": 7,
  "letter of recommendation": 6,
  "educational transcript": 5,
  certification: 4,
  "cover letter": 3,
  "parsed resume/cv": 2,
  "resume/cv": 1,

  // greenhouse
  resume: 1,
  cover_letter: 3,
  admin_only: 10,
  public: 10,
  offer_packet: 10,
  offer_letter: 10,
  take_home_test: 10,
  other: 10
};

const applicationSourceIds = {
  greenhouse: 201,
  beamery: 202
};

let stripeProductId = "prod_GB0iew9YqcD19J";
if (process.env.NODE_ENV === "production") {
  stripeProductId = "prod_GmPhm5h961aUOt";
}

module.exports = {
  personDocumentTypes,
  applicationSourceIds
};
