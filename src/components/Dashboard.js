import React from 'react';

const Dashboard = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Event Summary</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-blue-200">
          <tr>
            <th className="py-3 px-4 text-left">Event Name</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Time</th>
            <th className="py-3 px-4 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-3 px-4">Book Launch</td>
            <td className="py-3 px-4">2025-02-15</td>
            <td className="py-3 px-4">10:00 AM</td>
            <td className="py-3 px-4">Hall A</td>
          </tr>
          {/* Add more rows as necessary */}
        </tbody>
      </table>
    </section>
  );
};

export default Dashboard;
