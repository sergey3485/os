import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import { formidable } from 'formidable';

interface FormDTO {
  fullName: string;
  phone: string;
  service: string;
  attachments: [];
}

const transport = createTransport(
  {
    service: 'gmail',
  },
  {
    from: 's84360792@gmail.com',
    secure: true,
    auth: {
      user: 's84360792@gmail.com',
      pass: 'bmvm oeco wyix hvwd',
    },
  },
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') res.status(500).end();

  const data = await new Promise((resolve, reject) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);

      resolve({ err, fields, files });
    });
  });

  // @ts-expect-error change type
  const { err, fields, files } = data;

  try {
    await transport.sendMail({
      priority: 'high',
      to: 's84360792@gmail.com',
      subject: 'Заявка на страхование',
      html: `
        <div>
          <p>Имя: ${fields.fullName}</p>
          <p>Телефон: ${fields.phone}</p>
          <p>Услуга: ${fields.service}</p>
        </div>
      `,
      // attachments: files.attachments.map((file: PersistentFile): Attachment => ({
      //   filename: file.toJSON
      // })),
    });

    res.status(200).end();
  } catch (error) {
    console.log(error);

    res.status(500).end();
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
