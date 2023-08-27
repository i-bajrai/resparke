import Resident from '../models/resident.model';
import EmailService from './email.service';

class ResidentService {
  static async create(residentData: any): Promise<any> {
      const resident = new Resident(residentData);
      const savedResident = await resident.save();
      
      // Do not await here, blocking the thread to wait for the email to send slows down performance.
      EmailService.sendResidentCreationConfirmation(null, `${savedResident.firstName} ${savedResident.lastName}`)
      
      return savedResident;
  }

  static async getAll(): Promise<any[]> {
      const residents = await Resident.find();
      
      return residents;
  }
}

export default ResidentService;
