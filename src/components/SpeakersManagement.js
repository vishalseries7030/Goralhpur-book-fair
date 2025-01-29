import React from 'react';

const Speakers = () => {
  const speakers = [
    { name: 'John Doe', session: 'Book Launch - Author A', time: '10:00 AM' },
    { name: 'Jane Smith', session: 'Poetry Session', time: '12:00 PM' },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Speakers</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-orange-200">
          <tr>
            <th className="py-3 px-4 text-left">Speaker Name</th>
            <th className="py-3 px-4 text-left">Session</th>
            <th className="py-3 px-4 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {speakers.map((speaker, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{speaker.name}</td>
              <td className="py-3 px-4">{speaker.session}</td>
              <td className="py-3 px-4">{speaker.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Speakers;
