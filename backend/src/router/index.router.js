import {Router} from 'express';
import {index} from '../controller/index.controller';

const router = Router();

router.get('/', index);

export default router;