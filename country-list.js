'use strict'

var data = require('./data.js').default

/**
 * Precompute name and code lookups.
 */
var nameMap = {}
var codeMap = {}
data.forEach(function (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
})

// import { countries } from 'country-list'
module.exports.countries = new CountryList()
function CountryList () {
  if (!(this instanceof CountryList)) return new CountryList()
};


CountryList.prototype.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

CountryList.prototype.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

CountryList.prototype.getLookupNames = function getLookupNames () {
  return data.map(function (country) {
    return country.name.toLowerCase()
  })
}

CountryList.prototype.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

CountryList.prototype.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

CountryList.prototype.getCodeList = function () {
  return codeMap
}

CountryList.prototype.getNameList = function () {
  return nameMap
}

CountryList.prototype.getData = function getData () {
  return data
}
