// var colors = require('colors');
var utils = require('./src/common/utils');
var defaults = require('./config/defaults');
var overrides = require('./config/overrides');

if (!process.env.NODE_ENV) {
    throw new Error("NODE_ENV not set");
}

var config = utils.merge(defaults, overrides);

utils.pp(config);

// var puddle_dsn = config.postgresql.puddle.dsn;

// db.connect(config.postgresql.puddle.dsn);

/* console.log("");
console.log("Configuration".bold.underline);
console.log("");
console.log('Node environment: %s', process.env.NODE_ENV.bold);
console.log('PostgreSQL DSN: %s', config.postgresql.puddle.dsn.bold);
console.log('Redis port: %s', config.redis.port.bold);
console.log('Redis host: %s', config.redis.host.bold);
console.log('API host: %s', config.api.host.bold);
console.log('API port: %s', config.api.port);
console.log("");
*/
