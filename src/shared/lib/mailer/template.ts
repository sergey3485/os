import { OfferTemplateFields } from './types';

export const offerTemplate = (fields: OfferTemplateFields) => `
<div>
  <p>Имя: ${fields.fullName}</p>
  <p>Телефон: ${fields.phone}</p>
  <p>Услуга: ${fields.service}</p>
</div>
`;
