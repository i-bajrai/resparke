import request from 'supertest';
import Resident from '~/models/resident.model';
import app from '~/app';
import { run } from '~/database/seeders/resident-seeder';
import { closeDB, connectDB } from '../config/mongoose.config';

jest.mock('../services/email.service');

describe('/residents endpoints', () => {
    beforeAll(async () => {
        await connectDB();

        await run();
    });

    afterAll(async () => {
        closeDB();
    });

    it('should return a list of residents', async () => {
        const response = await request(app).get('/residents');

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);

        const resident = response.body[0];

        expect(resident.firstName).toBeDefined();
        expect(resident.lastName).toBeDefined();
        expect(resident.email).toBeDefined();
        expect(resident.roomNumber).toBeDefined();
        expect(resident.countryOfBirth).toBeDefined();
    });

    it('should save a resident to the database', async () => {
        const residentData = {
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '1990-01-01',
            email: 'john.doe@example.com',
            roomNumber: 101,
            countryOfBirth: 'USA'
        };

        const response = await request(app)
            .post('/residents')
            .send(residentData);

        expect(response.status).toBe(200);

        const resident = await Resident.findOne({ email: 'john.doe@example.com' });
        expect(resident).toBeDefined();
        expect(resident?.firstName).toBe('John');
        expect(resident?.lastName).toBe('Doe');
    });
});
