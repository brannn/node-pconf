var defaults = {
    api: {
        host: process.env.FOO_API_FQDN,
        port: process.env.FOO_API_PORT,
        base_path: process.env.FOO_API_URL
    },
    postgresql: {
        foo: {
            dsn: process.env.FOO_POSTGRESQL_DSN
        }
    },
    redis: {
        host: process.env.FOO_REDIS_HOST,
        port: process.env.FOO_REDIS_PORT,
        db: process.env.FOO_REDIS_DB
    }
}

module.exports = defaults;
