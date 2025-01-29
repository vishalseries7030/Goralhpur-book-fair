import React from 'react';

const DownloadButton = () => {
  // Example data for each section (you can replace it with dynamic data from your application)
  const dashboardData = [
    { id: 1, stat: 'Total Users', value: 2500 },
    { id: 2, stat: 'Total Events', value: 5 },
  ];

  const eventManagementData = [
    { id: 1, eventName: 'Book Fair', date: '2025-02-10', location: 'Gorakhpur' },
    { id: 2, eventName: 'Literature Fest', date: '2025-03-20', location: 'Kanpur' },
  ];

  const scheduledEventsData = [
    { id: 1, eventName: 'Opening Ceremony', date: '2025-02-10', time: '10:00 AM' },
    { id: 2, eventName: 'Book Signing', date: '2025-02-11', time: '2:00 PM' },
  ];

  const booksData = [
    { id: 1, title: 'React for Beginners', author: 'John Doe', genre: 'Programming' },
    { id: 2, title: 'Learning JavaScript', author: 'Jane Smith', genre: 'Programming' },
  ];

  const speakersData = [
    { id: 1, name: 'John Doe', topic: 'React and the Future', session: '2:00 PM' },
    { id: 2, name: 'Jane Smith', topic: 'JavaScript Basics', session: '4:00 PM' },
  ];

  const userManagementData = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
  ];

  // Function to convert each section data to CSV format
  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(','); // Column headers
    const rows = data.map(item => Object.values(item).join(',')); // Rows of data
    return [header, ...rows].join('\n'); // Combine header and rows
  };

  // Function to download all data as a CSV file
  const downloadCSV = () => {
    const csvData = [
      // Convert data of each section to CSV and join them with section titles
      `Dashboard Data\n${convertToCSV(dashboardData)}`,
      `Event Management Data\n${convertToCSV(eventManagementData)}`,
      `Scheduled Events Data\n${convertToCSV(scheduledEventsData)}`,
      `Books Data\n${convertToCSV(booksData)}`,
      `Speakers Data\n${convertToCSV(speakersData)}`,
      `User Management Data\n${convertToCSV(userManagementData)}`
    ].join('\n\n'); // Add a space between each section's data

    const blob = new Blob([csvData], { type: 'text/csv' }); // Create a Blob object
    const url = URL.createObjectURL(blob); // Create a download URL
    const a = document.createElement('a'); // Create an anchor element
    a.href = url; // Set the URL as the href
    a.download = 'all_data.csv'; // Set the file name
    a.click(); // Programmatically click the anchor element to trigger download
    URL.revokeObjectURL(url); // Clean up the URL object after download
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Download All Data</h2>
      <button
        onClick={downloadCSV}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Download CSV
      </button>
    </section>
  );
};

export default DownloadButton;




// // components/DownloadButton.js
// import React from "react";
// import axios from "axios";
// import Papa from "papaparse";

// const DownloadButton = () => {
//   const downloadCSV = async () => {
//     try {
//       const apiUrl = "https://1c3a-146-196-35-203.ngrok-free.app/users/csv";

//       // Fetch data from the API
//       const response = await axios.get(apiUrl);

//       console.log("API Response:", response.data); // Debugging API response

//       let data = response.data;

//       // Check if the API returns CSV directly as a string
//       if (typeof data === "string") {
//         // Create a Blob for CSV string
//         const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "user.csv"; // Set the file name
//         document.body.appendChild(link);
//         link.click(); // Trigger download
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url); // Revoke URL
//       } else if (Array.isArray(data)) {
//         // If the API returns an array of objects, convert to CSV
//         const csv = Papa.unparse(data);
//         const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "user.csv";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url);
//       } else {
//         throw new Error("Received data is not in the expected format.");
//       }
//     } catch (error) {
//       console.error("Error downloading the CSV file:", error);
//       alert(error.message || "Failed to download the file. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <button
//         onClick={downloadCSV}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Download CSV
//       </button>
//     </div>
//   );
// };

// export default DownloadButton;


// // components/DownloadButton.js my code 
// import React from 'react';
// import axios from 'axios';
// import Papa from 'papaparse';

// const DownloadButton = () => {
//   const downloadExcel = async () => {
//     try {
//       // Fetch data from the new dummy API
//       const response = await axios.get('https://fakestoreapi.com/products');
//       const products = response.data;

//       // Convert the JSON data to CSV format using PapaParse
//       const csv = Papa.unparse(products);

//       // Create a Blob from the CSV data and initiate download
//       const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//       const link = document.createElement('a');
//       if (link.download !== undefined) {
//         const url = URL.createObjectURL(blob);
//         link.setAttribute('href', url);
//         link.setAttribute('download', 'products.csv');
//         link.style.visibility = 'hidden';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     } catch (error) {
//       console.error('Error:', error); // Log any errors
//       alert('Failed to download the file. Please try again.');
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <button
//         onClick={downloadExcel}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
//       >
//         Download 
//       </button>
//     </div>
//   );
// };

// export default DownloadButton;




// import React from 'react';

// const handleDownload = async () => {
//     try {
//         // Dummy API URL
//         const response = await fetch('https://freetestapi.com/api/v1/books?limit=5');
        
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
        
//         const jsonData = await response.json();

//         // Check if the API returns valid data
//         if (!jsonData || jsonData.length === 0) {
//             throw new Error('No data available');
//         }

//         // Convert JSON to CSV
//         const csvData = jsonData.map(item => `${item.title},${item.author},${item.date}`).join('\n');
        
//         // Create a Blob from CSV data
//         const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'event_data.csv'; // Set the file name
//         link.click(); // Trigger the download
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//         alert('Failed to fetch event data. Please try again later.');
//     }
// };

// const DownloadButton = () => {
//     return (
//         <div className="flex justify-center items-center mt-10">
//             <button 
//                 onClick={handleDownload} 
//                 className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-200"
//             >
//                 Download Event Data (CSV)
//             </button>
//         </div>
//     );
// };

// export default DownloadButton;
