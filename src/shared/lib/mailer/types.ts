export interface OfferTemplateFields {
  fullName: string;
  phone: string;
  service: string;
}

export interface OfferFields extends OfferTemplateFields {
  attachments?: Express.Multer.File[]
}
