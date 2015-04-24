'use strict';

// Library starts out in the 'lib' folder
// -- Automatically loads index.js file
// -- if we wanted person.js, syntax = './lib/person'

//module.exports = require('./lib');

var lib = require('./lib');
lib.getAge("Scott");

