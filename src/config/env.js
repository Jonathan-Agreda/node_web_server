//require("dotenv").config();
import env from "dotenv"
env.config();

//const { get } = require("env-var");
import envvar from "env-var";
const {get} = envvar


export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
};

/* module.exports = {
  envs,
}; */
