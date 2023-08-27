import nodemailer from 'nodemailer';
import transporter from '../config/email.config';

class EmailService {
    static async sendMail(options: nodemailer.SendMailOptions): Promise<nodemailer.SentMessageInfo> {
        const info = await transporter.sendMail(options);

        return info;
    }

    static async sendResidentCreationConfirmation(to: string | null, name: string): Promise<nodemailer.SentMessageInfo> {
        const options: nodemailer.SendMailOptions = {
            from: '"Resident App" <noreply@resident-app.com>',
            to: to || 'mattijs@resparke.com',
            subject: `New Resident Registered: ${name}`,
            text: `This is an alert to let you know a new resident has been registered.`,
            html: `This is an alert to let you know a new resident has been registered.`
        };
        return this.sendMail(options);
    }
}

export default EmailService;
