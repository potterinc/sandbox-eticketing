interface IInvoices {
  invoice: {
    totalInovice: number;
    totalInvoiceAmount: number;
    datesent: string;
  };
  invoiceData: [
    {
      invocieno: string;
      amount: number;
      invoiceYear: string;
      pid: string;
      property: {
        lga: string;
        street: string;
        houseNo: string;
        zone: string;
      }
    }
  ]
}

export default IInvoices;
