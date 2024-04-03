import con from '../../db/index.js';
import express from "express";

const transporteRouter = express.Router();

transporteRouter.get("/", async (req, res) => {
    try {
        const idTransporte = req.body.id_transporte;
        const query = "SELECT * FROM transporte WHERE id_transporte = ?";
        console.log(await con.query(query, idTransporte))
        res.sendStatus(200);

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

transporteRouter.post("/", async (req, res) => {
    try {
        const { tra_origen, tra_destino, tra_hraSalida, tra_Llegada, tra_cupo, tra_costo, id_empresa, id_viaje, id_anden, id_camion, id_usuario, tra_fecha_salida, tra_fecha_llegada } = req.body;
        const query = 'INSERT INTO transporte (tra_origen, tra_destino, tra_hraSalida, tra_Llegada, tra_cupo, tra_costo, id_empresa, id_viaje, id_anden, id_camion, id_usuario, tra_fecha_salida, tra_fecha_llegada) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ';
        const format = con.format(query, [tra_origen, tra_destino, tra_hraSalida, tra_Llegada, tra_cupo, tra_costo, id_empresa, id_viaje, id_anden, id_camion, id_usuario, tra_fecha_salida, tra_fecha_llegada]);
        await con.query(format);
        res.sendStatus(200);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

transporteRouter.delete("/", async (req, res) => {
    try {
        const idTransporte = req.body.id_transporte; 
        const query = 'DELETE FROM transporte WHERE id_transporte = ?';
        await con.query(query, idTransporte);
        res.sendStatus(200);
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default transporteRouter;