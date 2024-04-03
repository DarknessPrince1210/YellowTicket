import con from '../../db/index.js';
import express from "express";

const andenesRouter = express.Router();

andenesRouter.get("/", async (req, res) => {
    try {
        const idAnden = req.body.id_anden;
        const query = "SELECT * FROM andenes WHERE id_anden = ?";
        console.log(await con.query(query, idAnden))
        res.sendStatus(200);

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default andenesRouter;
