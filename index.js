const person = require('./person.json');
const compliments = require('./compliments.json');

function randomFrom(array) {
  return array[ Math.floor(Math.random()*(array.length-1)) ];
}

function getPerson() { return randomFrom(person); }
function getCompliment() { return randomFrom(compliments); }
function getAddress() { return getCompliment() + ' ' + getPerson(); }

module.exports = {
  getPerson,
  getCompliment,
  getAddress
};
