import { Router } from 'express';
import {
  extract
} from '../controllers/document.controller';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/extract', upload.single('document'), extract);

export default router;