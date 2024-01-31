import express from 'express'
import { Employees } from '../models/Employees.js'


const router = express.Router();


router.put("/:id", async(req, res) => {
    try {
        const employee = await Employees.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!employee) {
            return res.status(404).send('Employee not found!');
        }
        res.send("Employee updated successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error updating the employee: ${error.message}`);
    }
})


export { router as updateEmployee };