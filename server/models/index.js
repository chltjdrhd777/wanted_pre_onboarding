"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "dev";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

require("dotenv").config();

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes, Sequelize);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//! Relations/////////////////////////////////////////////////////////
const { User } = db;

//@ 1:1

//@ 1:N

//@ N:M

//% initiation //////////////////////////////////////////////////////
db.sequelize.sync({ force: false, alter: process.env.NODE_ENV === "dev" }).then(() => {
  console.log("sequelize activated");

  async function seed() {
    let testUser = await User.findOne({});

    if (!testUser) {
      testUser = await User.create({
        social: "kakao",
        email: "test@kakao.com",
        nickname: "kakao",
        thumbImg:
          "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
      });
    }
  }

  seed();
});

module.exports = db;
