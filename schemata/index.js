
exports.minimal = {
	"properties": {
		"title": { "type": "string", "required": true },
		"url": { "type" : "string", "required": true },
		"author": { "type": "string" },
		"license": { "type": "string" },
		"tags": { 
			"type": "array",
			"items": { "type": "string" }
		},
		"thumbnailURL": { "type": "string" },
		"description": { "type": "string" }
	}
}