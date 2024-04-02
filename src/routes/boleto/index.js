import con from '../../db/index.js';
import express from "express";

const boletoRouter = express.Router();

boletoRouter.get("/", async (req, res) => {
    try {
        const idBoleto = req.body.id_boleto;
        const query = 'SELECT * FROM boleto WHERE id_boleto = ?';
        const data = await con.query(query, idBoleto);
        console.log(data[0])
        res.status(200).json(data[0])

        const viajes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

        function encontrarLetrasIntermedias(origen, destino, viajes) {
            const indexOrigen = viajes.indexOf(origen);
            const indexDestino = viajes.indexOf(destino);
        
            // Si las letras no están en el array o si están en el mismo índice, retornar un mensaje
            if (indexOrigen === -1 || indexDestino === -1 || indexOrigen === indexDestino) {
                return "Las letras no son válidas o son iguales.";
            }
        
            // Determinar el rango de letras entre letra1 y letra2
            const rango = viajes.slice(indexOrigen + 1, indexDestino);
            
            // Si no hay letras intermedias, retornar un mensaje
            if (rango.length === 0) {
                return `${origen}, ${destino}`;
            } else {
                // Si hay letras intermedias, retornar todas las letras del rango
                return `${origen}, ${rango.join(', ')}, ${destino}`;
            }
        }
        
        // Ejemplo de uso
        console.log(encontrarLetrasIntermedias('e', 'g', viajes)); // Imprimirá 'a, b, c, d'
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

boletoRouter.post("/", async (req, res) => {
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

boletoRouter.delete("/", async (req, res) => {
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

export default boletoRouter;