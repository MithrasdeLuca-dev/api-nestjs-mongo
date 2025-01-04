import * as nodemailer from 'nodemailer';

const HOST_SMTP_NODEMAILER = process.env.HOST_NODEMAILER;
const PORT_NODEMAILER = parseInt(process.env.PORT_NODEMAILER);

const AUTH_USER_NODEMAILER = process.env.AUTH_USER_NODEMAILER;
const AUTH_PASSWORD_NODEMAILER = process.env.AUTH_PASSWORD_NODEMAILER;

export const transporter = nodemailer.createTransport({
  host: HOST_SMTP_NODEMAILER,
  port: PORT_NODEMAILER,
  secure: false,
  auth: {
    user: AUTH_USER_NODEMAILER,
    pass: AUTH_PASSWORD_NODEMAILER,
  },
});
