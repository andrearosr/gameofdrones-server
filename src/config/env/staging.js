import path from "path";

export const dbConfig = {
  db: "mongodb://god:god@ds263948.mlab.com:63948/heroku_4zrrkz53"
};

export const appConfig = {
  env: "staging",
  host: "https://gofdrones.herokuapp.com/",
  path: "/v1",
  basePath: "/api",
  port: process.env.PORT,
  publicPort: process.env.PORT,
  root: path.join(__dirname, "../../../")
};

export const constants = {
  pagination: {
    limit: 40,
    offset: 0
  }
};
