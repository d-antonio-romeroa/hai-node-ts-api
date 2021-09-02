import * as express from 'express';
import {Express} from 'express-serve-static-core';
import * as bp from "body-parser";
import routes from "../routes/cars";

const API_VERSION: string = process.env.API_VERSION ||`v1`;
let BASE = `/api/${API_VERSION}`

export async function createServer(): Promise<Express> {
    const app = express()
    
    //Middlewares
    // app.use(morgan("dev"));
    app.use(express.json());
    app.use(bp.json());
    app.use(bp.urlencoded({ extended: true }));

    // Routing Imports
    // las rutas deben ser invocadas tras aplicar todos los middleware en pos de centralizar las rutas en un index
    
    app.use(`${BASE}/cars`, routes); 
    //Server startup
    return app;
  }