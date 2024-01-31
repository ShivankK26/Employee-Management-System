import express from 'express'
import { Employees } from '../models/Employees.js'


const router = express.Router();


router.get("/:id", async(req, res) => {
    console.log(req.params.id);
    try {
        const employee = await Employees.findById(req.params.id);
        if (!employee) {
            return res.status(404).send("Employee not found!");
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error updating the employee: ${error.message}`)
    }
})


export { router as getEmployeeById };