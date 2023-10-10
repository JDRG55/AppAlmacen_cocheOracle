import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { TipoProducto } from "./TipoProducto";

export class Producto extends Model {
  public nombreProducto!: string;
  public marcaProducto!: string;
  public precioProducto!: number;
  public stockProducto!: number;
  public cantidadProducto!: number;
  public TipoproductoId!: number;
}

export interface ProuctoI {
  nombreProducto: string;
  marcaProducto: string;
  precioProducto: number;
  stockProducto: number;
  cantidadProducto: number;
  TipoproductoId : number;
}

Producto.init(
    {
        nombreProducto: {
          type: DataTypes.STRING,
          allowNull: false
        },
        marcaProducto: {
          type: DataTypes.STRING,
          allowNull: false
        },
        precioProducto: {
          type: DataTypes.FLOAT,
          allowNull: false,
          unique: true
        },
        stockProducto: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        cantidadProducto: {
          type: DataTypes.FLOAT,
          allowNull: false
        }, 
        TipoproductoId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: TipoProducto,
              key: 'id',
          }
        } 
        
        
    },
    {
      tableName: "productos",
      sequelize: database,
      timestamps: true
    }
  );
  // Asociación la tabla cliente con la tabla productos
Producto.belongsTo(TipoProducto, { foreignKey: "TipoproductoId", as: 'Tipoproducto'}); // Agrega una columna clienteId en la tabla produucto
// agregamos la relacion inversa de uno a muchos
TipoProducto.hasMany(Producto, { foreignKey: "TipoproductoId" }); // Agrega una columna clienteId en la tabla producto
