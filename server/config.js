const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'fanny.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'pvhyqsbg',
    password: env.DB_PASSWORD || 'BDxKW5bOLNisTapcXosZUjk2dvP_vbLn',
    database: env.DB_NAME || 'pvhyqsbg',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;