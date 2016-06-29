var path = require('path')
var configByEnv = require('./env')

var defaults = {
	public: 'public',
	gaCodeSnippet: 'UA-XXXXXXXXX',
}

module.exports = {
	...defaults,
	...configByEnv
}
