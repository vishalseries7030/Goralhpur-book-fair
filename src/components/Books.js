import React from 'react';

const Books = () => {
  const books = [
    { title: 'Book A', author: 'Author A', available: 'Yes' },
    { title: 'Book B', author: 'Author B', available: 'No' },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Books Available</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-yellow-200">
          <tr>
            <th className="py-3 px-4 text-left">Book Title</th>
            <th className="py-3 px-4 text-left">Author</th>
            <th className="py-3 px-4 text-left">Available</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{book.title}</td>
              <td className="py-3 px-4">{book.author}</td>
              <td className="py-3 px-4">{book.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Books;
