import { NextFunction, Response, Request } from "express";

/**
 * Logger module that can be used as a middleware.
 */
class Logger {
  constructor() {}

  /** @description Log all reqeust */ //HARRY Troubleshoot this
  all(req: Request, res: Response, next: NextFunction) {

    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration} ms\n`;
      console.log(logMessage)
    })
    next();
  }
}

export default Logger;