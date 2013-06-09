var resource = require('resource'),
	schemata = require('./schemata'),
	thing = resource.define('thing');

thing.schema = schemata.minimal;
thing.schema.description = 'thing - see thingtracket.net';
exports.thing = thing;