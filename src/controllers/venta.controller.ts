import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Venta, VentaI } from '../models/Venta';

export class VentaController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para ventas')
        } catch (error) {

        }
    }

    public async getAllVenta(req: Request, res:Response){
        try {
            const ventas: VentaI[] = await Venta.findAll(
                {
                  
                }
            ) // select * from clientes;
            res.status(200).json({ventas})
        } catch (error) {

        }
    }

    public async createVenta(req: Request, res:Response){
        const {
            fechaVenta,
            subtotal,
            impuestos,
            descuentos,
            total,
            clienteId
        }=req.body;

        try{
            let body: VentaI = {
                fechaVenta,
                subtotal,
                impuestos,
                descuentos,
                total,
                clienteId,
               
            }
            const venta:VentaI = await Venta.create({...body});
            res.status(200).json({Venta});
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}