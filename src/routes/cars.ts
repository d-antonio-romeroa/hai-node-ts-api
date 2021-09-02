import { Router, Request, Response } from 'express';
const routes = Router();
const {getById, getByPlate} = require('../controllers/cars-controller');

// Get Patente by id routing
routes
    .route("/byid/:carId")
    .get(getById);

// Get ID by Patente routing
routes
    .route("/byplate/:plateNo")
    .get(getByPlate);

export default routes
