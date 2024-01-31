import express from "express";
import { Employees } from '../models/Employees.js'


const router = express.Router();


router.delete("/:id", async(req, res) => {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send("Employee not found!");
        }
        res.send("Employee deleted!");
    } catch (error) {
        console.error(error);
    }
})


export { router as deleteEmployee };