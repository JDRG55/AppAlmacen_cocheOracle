import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class TipoProducto extends Model {
  public nombreTipoProducto!: string;
 
}

export interface TipoProductoI {
  nombreTipoProducto: string;
 
}

TipoProducto.init(
    {
        nombreTipoProducto: {
          type: DataTypes.STRING,
          allowNull: false
        },
        },
    {
      tableName: "tipoproductos",
      sequelize: database,
      timestamps: true
    }
  );
