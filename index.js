var resource = require('resource'),
    schemata = require('./schemata'),
    thing = resource.define('thing');

thing.schema.description = 'big resource for creating things - see thingtracket.net';
thing.schema = schemata.minimal;
exports.thing = thing;