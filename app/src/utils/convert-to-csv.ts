import Papa from 'papaparse'

export const convertToCsv = (data: any) => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'countries.csv';
  link.click();
};