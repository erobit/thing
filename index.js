var resource = require('resource'),
		thing = resource.define('thing');

thing.schema.description = 'thing - see thingtracket.net';

thing.property('title', { type: 'string', required: true });
thing.property('url', { type: 'string', required: true });
thing.property('author', { type: 'string' });
thing.property('license', { type: 'string' });
thing.property('tags', { type: 'array', items: { type: 'string' }});
thing.property('thumbnailURL', { type: 'string' });
thing.property('description', { type: 'string' });

exports.thing = thing;