import con from '../../db/index.js';
import express from 'express';

const passengerRouter = express.Router();


passengerRouter.get("/", async (req, res) => {
    try {
        const idUsuario = req.body.id_usuario;
        const query = 'SELECT * FROM usuario WHERE id_usuario = ?';
        const data = await con.query(query, idUsuario);
        console.log(data[0])
        res.status(200).json(data[0])
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

passengerRouter.post("/", async (req, res) => {
    try {
        const usu_nombre = req.body.usu_nombre;
        const usu_edad = req.body.usu_edad;
        const usu_correo = req.body.usu_correo;
        const id_rol = req.body.id_rol;
        const query = 'INSERT INTO usuario (usu_nombre, usu_edad, usu_correo, id_rol) VALUES (?, ?, ?, ?) ';
        const format = con.format(query, [usu_nombre, usu_edad, usu_correo, id_rol])
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

passengerRouter.patch("/", async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        let query = 'UPDATE usuario SET ';

        const finalQuery = keys.map((key, index)=> {
            query+=key + '=' + req.body[key] + (index==keys.length-1 ? '' : ', ');
            return query;
        });
        const lastQuery = finalQuery[finalQuery.length -1] += " WHERE id_usuario = ?;";
        
        const data = await con.query(lastQuery, [3]);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

passengerRouter.delete("/", async (req, res) => {
    try {
        const userId = req.body.id_usuario; 
        const query = 'DELETE FROM usuario WHERE id_usuario = ?';
        await con.query(query, userId);
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default passengerRouter;