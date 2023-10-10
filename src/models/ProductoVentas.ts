import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Venta } from "./Venta";
import { Producto } from "./Producto";

export class ProductoVenta extends Model {

  public cantidad!: number;
  public precio!: number;
  public total!: number;
  public ventaId!: number;
  public productoId!: number;
}

export interface ProuctoVentaI {
    cantidad: number;
    precio: number;
    total: number;
    ventaId: number;
    productoId: number;
}

ProductoVenta.init(
    {
        
        cantidad: {
          type: DataTypes.FLOAT,
          allowNull: false,
          unique: true
        },
        precio: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        total: {
          type: DataTypes.FLOAT,
          allowNull: false
        }, 
        ventaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Venta,
                key: 'id',
            }
        },

        productoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Producto,
                key: 'id',
            }
        }
        
        
    },
    {
      tableName: "productosventas",
      sequelize: database,
      timestamps: true
    }
  );

  ProductoVenta.belongsTo(Venta, { foreignKey: "ventaId", as: 'venta'}); 
// agregamos la relacion inversa de uno a muchos
Venta.hasMany(ProductoVenta, { foreignKey: "ventaId" });

ProductoVenta.belongsTo(Producto, { foreignKey: "productoId", as: 'producto'}); 
// agregamos la relacion inversa de uno a muchos
Producto.hasMany(ProductoVenta, { foreignKey: "productoId" });