import { Request, Response } from "express";
import IInvoices from "../interfaces/payment.interface";
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
        const amountDue = invoice.billAmount;
        setTimeout(async () => {
          await axios.patch(`https://sms-api.enumapp.com/api/v1/invoice/${invoice.invoiceNo}`, {
            collectionid: invoice.invoiceNo,
            amount: crypto.randomInt(1000, amountDue),
            paymentref: crypto.randomBytes(16).toString('hex'),
            collectionyear: invoice.fiscalYear,
            paymentdate: new Date()
          })
            .then((response: any) => console.log(response.message))
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
