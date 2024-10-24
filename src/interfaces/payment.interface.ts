interface IInvoices {
  invoice: {
    totalInovice: number;
    batchAmount: number;
    datesent: string;
  };
  invoiceData: [
    {
      invoiceNo: string;
      billAmount: number;
      fiscalYear: string;
      propertyId: string;
    }
  ]
}

export default IInvoices;
