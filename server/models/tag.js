"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes, Sequelize) => {
  class Tag extends Model {}

  Tag.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      tagName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Tag",
      freezeTableName: true,
    }
  );
  return Tag;
};
