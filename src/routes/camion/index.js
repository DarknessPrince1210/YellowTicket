import con from '../../db/index.js';
import express from "express";

const camionRouter = express.Router();

camionRouter.get("/", async (req, res) => {
    try {
        const idCamion = req.body.id_camion;
        const query = "SELECT * FROM camion WHERE id_camion = ?";
        console.log(await con.query(query, idCamion))
        res.sendStatus(200);

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default camionRouter;
