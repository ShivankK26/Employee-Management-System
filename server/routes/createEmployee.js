import express from 'express'
import { Employees } from '../models/Employees.js'


const router = express.Router();


router.post('/', async(req, res) => {
    try {
        const employee = new Employees(req.body);
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


export { router as createEmployee };