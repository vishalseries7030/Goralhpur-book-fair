// components/DownloadButton.js
import React from 'react';
import axios from 'axios';
import Papa from 'papaparse';

const DownloadButton = () => {
  const downloadExcel = async () => {
    try {
      // Fetch data from the new dummy API
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;

      // Convert the JSON data to CSV format using PapaParse
      const csv = Papa.unparse(products);

      // Create a Blob from the CSV data and initiate download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'products.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error:', error); // Log any errors
      alert('Failed to download the file. Please try again.');
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={downloadExcel}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        Download CSV
      </button>
    </div>
  );
};

export default DownloadButton;
