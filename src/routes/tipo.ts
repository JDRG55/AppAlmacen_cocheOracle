import { Request, Response, Application, Router } from "express";

import { TipoProductoController } from "../controllers/tipo.controller";

export class TipoProductoRoutes {
    public productoController: TipoProductoController =  new TipoProductoController();

    public routes(app: Application): void {
        app.route("/tipoproductos/test").get(this.productoController.test)
        app.route("/tipoproductos").get(this.productoController.getAllTipoProducto)
        app.route("/tipoproducto").post(this.productoController.createTipoProducto)
        
    }
}