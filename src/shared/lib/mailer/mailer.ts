import { createTransport } from 'nodemailer';
import { OfferFields } from './types';

const transport = createTransport(
  {
    service: 'gmail',
  },
  {
    // TODO: use env variables
    from: 's84360792@gmail.com',
    secure: true,
    auth: {
      // TODO: use env variables
      user: 's84360792@gmail.com',
      // TODO: use env variables
      pass: 'bmvm oeco wyix hvwd',
    },
  },
);

export const sendOffer = (fields: OfferFields) => transport.sendMail({
  priority: 'high',
  // TODO: use env variables
  to: 's84360792@gmail.com',
  subject: 'Заявка на страхование',
  html: `
    <div>
      <p>Имя: ${fields.fullName}</p>
      <p>Телефон: ${fields.phone}</p>
      <p>Услуга: ${fields.service}</p>
    </div>
  `,
  attachments: fields.attachments?.map((file) => {
    return {
      filename: file.originalname,
      content: file.buffer,
    };
  }),
});
