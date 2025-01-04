import { HttpException } from '@nestjs/common';
import { userRequestMessagesError } from 'src/user/messages/messages.request.register';
import { transporter } from '../MailConfig';
import { ForgotPassword } from '../mailTemplates/ForgotPasswordTemplate';

const FROM_EMAIL_NODEMAILER = process.env.FROM_MAIL_NODEMAILER;

interface formatDataUser {
  email: string;
  username: string;
}

export const SendForgotPasswordEmail = async (userData: formatDataUser, token: string) => {
  const { email, username } = userData;

  const emailOptions = {
    from: FROM_EMAIL_NODEMAILER,
    to: email,
    subject: 'Esqueci minha senha',
    text: `Olá ${username}`,
    html: ForgotPassword(email, token),
  };

  try {
    await transporter.sendMail(emailOptions);
  } catch (error) {
    throw new HttpException(
      userRequestMessagesError.FAIL_SEND_EMAIL_WITH_PASSWORD + email,
      202,
    );
  }
};
