const { Client } = require("pg");

const client = new Client({
  user: "candidate01",
  host: "webropay.czeruqgah1kf.us-east-1.rds.amazonaws.com",
  database: "webropay",
  password: "webropay",
  port: 5432,
});

client.connect();
