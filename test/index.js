"use strict";

const x = require("../index");

console.log('\n=====COUNTRIES======')
// console.log(x.countries.list);

console.log(x.countries.id('India'));
console.log(x.countries.id('IN'));
console.log(x.countries.id(1));
console.log(x.countries.id({}));
console.log(x.countries.id({a: 1}));

console.log(x.countries.code('india'));
console.log(x.countries.code('in'));
console.log(x.countries.code(1));
console.log(x.countries.code({}));
console.log(x.countries.code({a: 1}));

console.log(x.countries.short('India'));
console.log(x.countries.short('IN'));
console.log(x.countries.short(1));
console.log(x.countries.short({}));
console.log(x.countries.short({a: 1}));

console.log(x.countries.full('IN'));
console.log(x.countries.full('INDIA'));
console.log(x.countries.full(1));
console.log(x.countries.full({}));
console.log(x.countries.full({a: 1}));

console.log('\n=====TERMS======');
// console.log(x.terms.list);

console.log(x.terms.id());
console.log(x.terms.id({}));
console.log(x.terms.id('freelance'));
console.log(x.terms.id('Contract'));
console.log(x.terms.id(5));

console.log(x.terms.name());
console.log(x.terms.name({}));
console.log(x.terms.name(4));
console.log(x.terms.name(14));
console.log(x.terms.name('contract'));


console.log('\n=====HOUR TYPES======')
// console.log(x.htypes.list);

console.log(x.htypes.id());
console.log(x.htypes.id({}));
console.log(x.htypes.id('part-time'));
console.log(x.htypes.id('prn'));
console.log(x.htypes.id(5));

console.log(x.htypes.name());
console.log(x.htypes.name({}));
console.log(x.htypes.name(3));
console.log(x.htypes.name(5));
console.log(x.htypes.name('part-time'));

console.log('\n=====SENIORITIES======')
// console.log(x.seniorities.list);

console.log(x.seniorities.id());
console.log(x.seniorities.id({}));
console.log(x.seniorities.id('0 year'));
console.log(x.seniorities.id('20+ YEARS'));
console.log(x.seniorities.id(5));

console.log(x.seniorities.name());
console.log(x.seniorities.name({}));
console.log(x.seniorities.name(3));
console.log(x.seniorities.name(5));
console.log(x.seniorities.name('part-time'));