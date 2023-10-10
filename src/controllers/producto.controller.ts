import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Producto, ProuctoI } from '../models/Producto';

export class ProductoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para productos')
        } catch (error) {

        }
    }

    public async getAllProducto(req: Request, res:Response){
        try {
            const productos: ProuctoI[] = await Producto.findAll(
                {
                  
                }
            ) 
            res.status(200).json({productos})
        } catch (error) {

        }
    }

    public async createProducto(req: Request, res:Response){
        const {
            nombreProducto,
            marcaProducto,
            precioProducto,
            stockProducto,
            cantidadProducto,
            TipoproductoId
        }=req.body;

        try{
            let body: ProuctoI = {
                nombreProducto,
                marcaProducto,
                precioProducto,
                stockProducto,
                cantidadProducto,
                TipoproductoId
                
            }
            const producto:ProuctoI = await Producto.create({...body});
            res.status(200).json({producto});
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}