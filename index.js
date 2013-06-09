var resource = require('resource'),
    schemata = require('./schemata'),
    thing = resource.define('thing');

thing.schema = schemata.minimal;
thing.schema.description =  'a "big framework" resource for creating things - see thingtracker.net'
exports.thing = thing;