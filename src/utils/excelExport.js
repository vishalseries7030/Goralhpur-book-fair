// utils/excelExport.js
import axios from "axios";
import { json2csv } from "json2csv";

export const downloadExcel = async () => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/books');
    const books = response.data;

    const csv = json2csv.parse(books);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'books.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    alert('Failed to download the file. Please try again.');
  }
};
