import { Request, Response, Router } from "express";
import processRoute from "./payment.route";

const router: Router = Router();

router.get('', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'Welcome to eTicketing payment Processing Server'
  })
})

router.use('/ticket', processRoute);

export default router;