import { Request, Response, NextFunction } from 'express';
import * as documentHelper from '../helpers/document.helper';
import * as openai from '../connectors/openai';
import fs from 'fs';
import ExtractReportResult from '../interfaces/ExtractReportResult';

export const extract = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const document = req.file;
    if (!document) {
      res.status(422).json({
        message: 'Invalid input'
      });
      return;
    }
    const extractedText: string = await documentHelper.extract(document);
    const summary: ExtractReportResult = await openai.getSummary(extractedText);
    res.json({
      ...summary,
      fileName: document.originalname
    });
    fs.unlinkSync(document.path); // Delete the file from the server.
  } catch (error) {
    next(error);
  }
};
