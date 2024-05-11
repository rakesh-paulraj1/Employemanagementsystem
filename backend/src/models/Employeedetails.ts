import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class  Employeedetails extends Model {}
 
Employeedetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      designation: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      aadhaarNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dept: {
        type: DataTypes.STRING(80),
        allowNull: true,
        defaultValue: 'Unknown'
      },
      hireDate: {
        type: DataTypes.DATE,
        allowNull: false,
        
      } ,
      createdDate: {
        type: DataTypes.DATE, 
        allowNull: true,
      }
      ,
      updatedDate: {
        type: DataTypes.DATE, 
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      salary: {
        type: DataTypes.DECIMAL,
        allowNull: true,
       
      },
      maritalStatus: {
        type: DataTypes.STRING(20),
        allowNull: true,
        
      }
     
    },
    {
      sequelize,
      modelName: "employeedetails",
      timestamps: false,
      underscored: true,
      tableName: "employeedetails"
    },
  );