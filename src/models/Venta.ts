import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";

export class Venta extends Model {
    public fechaVenta!: Date;
    public subtotal!: number;
    public impuestos!: number;
    public descuentos!: number;
    public total!: number;
    public clienteId!: number;
  
  }

  export interface VentaI {
    fechaVenta: Date;
    subtotal: number;
    impuestos: number;
    descuentos: number;
    total: number;
    clienteId:number;
}

Venta.init(
  {
    fechaVenta: {
        type: DataTypes.DATE,
        allowNull: false
      },
      subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      impuestos: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: true
      },
      descuentos: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false
      }, 
      clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id',
        }
    }
      
  },
  {
    tableName: "ventas",
    sequelize: database,
    timestamps: true
  }
);
// Asociación la tabla cliente con la tabla venta
Venta.belongsTo(Cliente, { foreignKey: "clienteId", as: 'cliente'}); // Agrega una columna clienteId en la tabla ventas
// agregamos la relacion inversa de uno a muchos
Cliente.hasMany(Venta, { foreignKey: "clienteId" }); // Agrega una columna clienteId en la tabla ventas