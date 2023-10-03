import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

import { sendOffer } from '@/shared/lib/mailer';
import { OfferFields } from '@/shared/lib/mailer/types';

function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void,
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
): Promise<void> => {
  const multerMemoryStorage = multer.memoryStorage();
  const multerStorage = multer({ storage: multerMemoryStorage });

  await runMiddleware(req, res, multerStorage.array('attachments'));

  const attachments = req.files as Express.Multer.File[];
  const others = req.body as OfferFields;

  await sendOffer({
    ...others,
    attachments,
  });

  res.status(200).end();
};

export default handler;
