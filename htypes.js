"use strict";

const dbhtypes = [
  "prn",
  "part-time",
  "full-time",
];

const types = {
  prn: 3,
  "part-time": 2,
  "part time": 2,
  "parttime": 2,
  "full-time": 1,
  "full time": 1,
  "fulltime": 1,
  part_time: 2,
  full_time: 1,

  3: "prn",
  2: "part-time",
  1: "full-time",

  // infer
  intern: 2,
  "full-time": 1,
  "part-time": 2,
  part_time: 2,
  full_time: 1,
  "full time": 1,
  "part time": 2,
  "intern-ship": 2,
  "intern ship": 2,
  "selfemployed": 1,
  volunteer: 2,
  undefined: 1,

  "full-time / part-time": 1,
  "full-time/part-time": 1,
  "casual": 2,
};

const getHourTypes = (input, t) => {
  const linput = (input + "").toLowerCase();
  if (t === "id") {
    if (typeof input === "string") {
      return types[linput] || 1;
    } else {
      return 1;
    }
  }
  if (t === "name") {
    if (typeof input === "number") {
      return types[Number(linput)] || "full-time";
    } else {
      return dbhtypes.includes(linput) ? linput : "full-time";
    }
  }
};

module.exports = {
  name: input => getHourTypes(input, "name"),
  id: input => getHourTypes(input, "id"),
  get list() {
    return types;
  }
};
