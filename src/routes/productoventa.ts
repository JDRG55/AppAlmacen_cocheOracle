import { Request, Response, Application, Router } from "express";

import { ProductoVentaController } from "../controllers/productoventa.controller";

export class ProductoVentaRoutes {
    public productoVentaController: ProductoVentaController =  new ProductoVentaController();

    public routes(app: Application): void {
        app.route("/productosventas/test").get(this.productoVentaController.test)
        app.route("/productosventas").get(this.productoVentaController.getAllProductoVenta)
        app.route("/productosventa").post(this.productoVentaController.createProductoVenta)
        
    }
}