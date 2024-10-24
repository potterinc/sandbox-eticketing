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
      address: {
        lga: string;
        street: string;
        houseNo: string;
        zone: string;
      }
    }
  ]
}

export default IInvoices;
