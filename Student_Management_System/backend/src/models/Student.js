const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    dateofBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    enrollmentDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
    }
  },
  {
    tableName: "students",
    timestamps: true,
  }
);

module.exports = Student;