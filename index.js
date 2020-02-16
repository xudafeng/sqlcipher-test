'use strict';

const Realm = require('leoric');

const initModel = require('./model');

const config = {
  dialect: 'sqlite',
  storage: './test.sqlite',
  define: {
    underscored: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    paranoid: false,
  },
  logger: {
    logQuery(sql) {
      console.log(sql);
    }
  },
};

const db = new Realm(config);

const Test1 = initModel(db);
db.models.Test1 = Test1;

(async () => {
  await db.sync();
  const s = 's';
  const res = await db.driver.query(`pragma key = '${s}'`);
  console.log(res);
})();
