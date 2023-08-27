import express from 'express';
import ResidentService from '../services/resident.service';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const residents = await ResidentService.getAll();
        res.status(200).send(residents);
    } catch (e) {
        handleErrors(res, e);
    }
});

router.post('/', async (req, res) => {
    try {
        const residentData = req.body;
        const savedResident = await ResidentService.create(residentData);
        res.status(200).send({ message: 'Resident saved successfully', data: savedResident });
    } catch (e) {
        handleErrors(res, e);
    }    
});

function handleErrors(res: express.Response, error: any) {
    let errorResponse = { 
        error: 'Failed operation',
        details: ''
    };

    if (error instanceof Error) {
        errorResponse.details = error.message;
    }

    res.status(500).send(errorResponse);
}

export default router;
