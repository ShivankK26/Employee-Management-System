import express from 'express'
import { Employees } from '../models/Employees';


const router = express.Router();


router.post('/', async(req, res) => {
    try {
        const employee = new Employees(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json({ id: savedEmployee._id });
    } catch (error) {
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});


module.exports = router;