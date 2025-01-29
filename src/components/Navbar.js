import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Function to handle CSV download (same as before)
  const downloadCSV = () => {
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
    const csvData = [
      `Dashboard Data\n${convertToCSV(dashboardData)}`,
      `Event Management Data\n${convertToCSV(eventManagementData)}`,
      `Scheduled Events Data\n${convertToCSV(scheduledEventsData)}`,
      `Books Data\n${convertToCSV(booksData)}`,
      `Speakers Data\n${convertToCSV(speakersData)}`,
      `User Management Data\n${convertToCSV(userManagementData)}`
    ].join('\n\n');

    const blob = new Blob([csvData], { type: 'text/csv' }); // Create a Blob object
    const url = URL.createObjectURL(blob); // Create a download URL
    const a = document.createElement('a'); // Create an anchor element
    a.href = url; // Set the URL as the href
    a.download = 'all_data.csv'; // Set the file name
    a.click(); // Programmatically click the anchor element to trigger download
    URL.revokeObjectURL(url); // Clean up the URL object after download
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Gorakhpur Book Fair</div>
        <div className="space-x-6 text-xl flex items-center">
          <Link 
            to="/" 
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            style={{ marginRight: '20px' }} // Added specific distance
          >
            Dashboard
          </Link>
          <Link 
            to="/events" 
            className="inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            style={{ marginRight: '20px' }} // Added specific distance
          >
            Event Management
          </Link>
          <Link 
            to="/scheduled-events" 
            className="inline-block px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            style={{ marginRight: '20px' }} // Added specific distance
          >
            Scheduled Events
          </Link>
          <Link 
            to="/speakers" 
            className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            style={{ marginRight: '20px' }} // Added specific distance
          >
            Speakers
          </Link>
          <Link 
            to="/books" 
            className="inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
            style={{ marginRight: '20px' }} // Added specific distance
          >
            Books Available
          </Link>
          <Link 
            to="/user-management" 
            className="inline-block px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
            style={{ marginRight: '20px' }} // Added specific distance
          >
            User Management
          </Link>
          {/* Download Button */}
          <button 
            onClick={downloadCSV}
            className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Download CSV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
