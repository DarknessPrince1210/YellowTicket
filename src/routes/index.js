import boleto from "./boleto/index.js";
import express from "express";
import passenger from "./passenger/index.js";
import viaje from "./viaje/index.js";

const mainRouter = express.Router();

const mainRouting = app => {
    app.use("/api/yellowTicket", mainRouter);
    mainRouter.use('/boleto', boleto);
    mainRouter.use('/passenger', passenger)
    mainRouter.use('/viaje', viaje)
}

export default mainRouting;
