import { Request, Response } from "express";
import IInvoices from "../interfaces/game.interface";
import crypto from 'crypto';
import axios from "axios";

class InvoiceProcessingController {

  /**
   * Generates unique content hub gaming id
   * @returns Content game id
   */
  processInvoiceRequest(req: Request, res: Response) {
    const tickets: IInvoices = req.body;
    const invoices = tickets.invoiceData;

    try {
      invoices.forEach(invoice => {
        setTimeout(async () => {
          await axios.patch(`https://sms-api.emumapp.com/api/v1/invoice/${invoice.pid}`, {
            pid: invoice.pid,
            amountDue: invoice.amount,
            amountPaid: crypto.randomInt(1000, invoice.amount),
            paymentRef: crypto.randomBytes(16).toString('hex'),
            year: new Date().getFullYear(),
            createdAt: new Date().toISOString
          })
            .then((response: any) => console.log(response))
            .catch((e: unknown | any) => console.log(e.message))
        }, 60000)
      })

      res.status(200).json({
        status: 'ok',
        message: 'Batch Invoices received!',
        metadata: {
          id: crypto.randomUUID(),
          total_invoice_received: invoices.length,
          date_received: Date.now().toString(),
        }
      });
    }
    catch (e: unknown | any) {
      res.status(200).json({
        status: 'ok',
        message: 'Batch Invoices received!',
        metadata: {
          id: crypto.randomUUID(),
          total_invoice_received: invoices.length,
          date_received: Date.now().toString(),
        }
      })
    }
  }
}

export default InvoiceProcessingController;
