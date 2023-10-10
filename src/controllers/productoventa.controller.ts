import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { ProductoVenta,ProuctoVentaI } from '../models/ProductoVentas';

export class ProductoVentaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para productos/ventas')
        } catch (error) {

        }
    }

    public async getAllProductoVenta(req: Request, res:Response){
        try {
            const productosventa: ProuctoVentaI[] = await ProductoVenta.findAll(
                {
                  
                }
            ) 
            res.status(200).json({productosventa})
        } catch (error) {

        }
    }

    public async createProductoVenta(req: Request, res:Response){
        const {
            cantidad,
            precio,
            total,
            ventaId,
            productoId,
        }=req.body;

        try{
            let body: ProuctoVentaI = {
                cantidad,
                precio,
                total,
                ventaId,
                productoId
                
            }
            const producto:ProuctoVentaI = await ProductoVenta.create({...body});
            res.status(200).json({producto});
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}