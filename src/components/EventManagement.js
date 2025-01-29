import React from 'react';

const EventManagement = () => {
  const events = [
    { name: 'Book Launch', date: '2025-02-15', time: '10:00 AM', location: 'Hall A' },
    { name: 'Author Meet', date: '2025-02-16', time: '12:00 PM', location: 'Hall B' },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Event Management</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-purple-200">
          <tr>
            <th className="py-3 px-4 text-left">Event Name</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Time</th>
            <th className="py-3 px-4 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{event.name}</td>
              <td className="py-3 px-4">{event.date}</td>
              <td className="py-3 px-4">{event.time}</td>
              <td className="py-3 px-4">{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EventManagement;
