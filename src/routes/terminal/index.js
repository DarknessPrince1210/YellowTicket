import con from '../../db/index.js';
import express from "express";

const terminalRouter = express.Router();

terminalRouter.get("/", async (req, res) => {
    try {
        const idTerminal = req.body.id_terminal;
        const query = "SELECT * FROM terminal WHERE id_terminal = ?";
        console.log(await con.query(query, idTerminal))
        res.sendStatus(200);

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

export default terminalRouter;
