import nodemailer from 'nodemailer';

const emailConfig = {
    host: process.env.EMAIL_HOST || 'localhost',
    port: Number(process.env.EMAIL_PORT) || 1025,
    secure: process.env.EMAIL_SECURE === 'true',
};

const transporter = nodemailer.createTransport(emailConfig);

export default transporter;
