import express from 'express'
import { Employees } from '../models/Employees'


const router = express.Router();


router.get("/", async(req, res) => {
    try {
        const response = await Employees.find()
        res.json(response)
    } catch (error) {
        res.status(500).send(`Error adding employee: ${error.message}`);
    }
})


module.exports = router;