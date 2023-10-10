import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { TipoProducto,TipoProductoI } from '../models/TipoProducto';

export class TipoProductoController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para tipo productos')
        } catch (error) {

        }
    }

    public async getAllTipoProducto(req: Request, res:Response){
        try {
            const tipo_productos: TipoProductoI[] = await TipoProducto.findAll(
                {
                  
                }
            ) 
            res.status(200).json({tipo_productos})
        } catch (error) {

        }
    }

    public async createTipoProducto(req: Request, res:Response){
        const {
            nombreTipoProducto,
        }=req.body;

        try{
            let body: TipoProductoI = {
                nombreTipoProducto,
                
            }
            const producto:TipoProductoI = await TipoProducto.create({...body});
            res.status(200).json({producto});
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}