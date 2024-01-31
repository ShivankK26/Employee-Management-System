import express from 'express'
import { Employees } from '../models/Employees'


const router = express.Router();


router.get("/:search", async(req, res) => {
    console.log(req.params.search);
    try {
        const employee = await Employees.find( {"firstname": req.params.search} )
        if (!employee) {
            return res.status(404).send("Employee not found!");
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error updating the employee: ${error.message}`);
    }
})


module.exports = router;