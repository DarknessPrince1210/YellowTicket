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
        const bol_noAsiento = req.body.bol_noAsiento;
        const bol_llave = req.body.bol_llave;
        const bol_hash = req.body.bol_hash;
        const id_estado = req.body.id_estado;
        const id_pasajero = req.body.id_pasajero;
        const id_transporte = req.body.id_transporte;
        const query = 'INSERT INTO boleto (bol_noAsiento, bol_llave, bol_hash, id_estado, id_pasajero, id_transporte) VALUES (?, ?, ?, ?, ?, ?) ';
        const format = con.format(query, [bol_noAsiento, bol_llave, bol_hash, id_estado, id_pasajero, id_transporte]);
        const data = await con.query(format);
        // console.log(data[0])
        // res.status(200).json(data[0])
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

viajeRouter.delete("/", async (req, res) => {
    try {
        const idBoleto = req.body.id_boleto; 
        const query = 'DELETE FROM boleto WHERE id_boleto = ?';
        await con.query(query, idBoleto);
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default viajeRouter;