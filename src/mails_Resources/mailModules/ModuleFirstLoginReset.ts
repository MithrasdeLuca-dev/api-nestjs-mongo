import { HttpException } from '@nestjs/common';
import { userRequestMessagesError } from 'src/user/messages/messages.request.register';
import { transporter } from '../MailConfig';
import { htmlResetPassword } from '../mailTemplates/FirstLoginResetTemplate';

const FROM_EMAIL_NODEMAILER = process.env.FROM_MAIL_NODEMAILER;

interface formatDataUser {
  email: string;
  id: string;
  username: string;
  password: string;
}

export const SendPasswordResetEmailOnFirstAccess = async (userData: formatDataUser) => {
  const { email, username, password } = userData;

  const emailOptions = {
    from: FROM_EMAIL_NODEMAILER,
    to: email,
    subject: 'Primeiro acesso',
    text: `Olá ${username}, ${password}, ${email}`,
    html: htmlResetPassword(username, email, password),
  };

  try {
    await transporter.sendMail(emailOptions);
  } catch (error) {
    throw new HttpException(
      userRequestMessagesError.FAIL_SEND_EMAIL_WITH_PASSWORD + ` ${email}`,
      202,
    );
  }
};
