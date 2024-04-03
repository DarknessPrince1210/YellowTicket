import con from '../../db/index.js';
import express from "express";

const viajeRouter = express.Router();

viajeRouter.get("/", async (req, res) => {
    try {
        const idBoleto = req.body.id_boleto;
        const query = "SELECT viaje FROM VIAJE WHERE viaje BETWEEN 'CDMX' AND 'JALISCO' AND viaje NOT IN ('CDMX', 'JALISCO');";
        const data = await con.query(query, idBoleto);
        console.log(data[0])
        res.status(200).json(data[0])

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

viajeRouter.post("/", async (req, res) => {
    try {
        const via_tuple_escala = req.body.via_tuple_escala;
        const query = 'INSERT INTO viaje (via_tuple_escala) VALUES (?) ';
        const format = con.format(query, [via_tuple_escala]);
        const data = await con.query(format);
        console.log(data[0])
        res.status(200).json(data[0])
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default viajeRouter;