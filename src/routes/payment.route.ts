import { Router } from 'express';
import GameProcessingController from '../controllers/payment.controller';

const processRoute: Router = Router();
const gameService = new GameProcessingController;

processRoute.post('/eswama', gameService.processInvoiceRequest);

export default processRoute;