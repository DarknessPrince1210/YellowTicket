import anden from "./andenes/index.js";
import boleto from "./boleto/index.js";
import camion from "./camion/index.js";
import express from "express";
import passenger from "./passenger/index.js";
import terminal from "./terminal/index.js";
import transporte from "./transporte/index.js";
import viaje from "./viaje/index.js";

const mainRouter = express.Router();

const mainRouting = app => {
    app.use("/api/yellowTicket", mainRouter);
    mainRouter.use('/boleto', boleto);
    mainRouter.use('/passenger', passenger);
    mainRouter.use('/viaje', viaje);
    mainRouter.use('/transporte', transporte);
    mainRouter.use('/terminal', terminal);
    mainRouter.use('/anden', anden)
    mainRouter.use('/camion', camion)
}

export default mainRouting;
