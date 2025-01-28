import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDownload = async () => {
    try {
      console.log("Fetching data from API...");
      const response = await fetch(process.env.REACT_APP_API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch data from the API");
      }

      const result = await response.json();
      console.log("Fetched data:", result);

      // Check if we have data
      const data = result || []; // Adjust based on API response structure
      if (!data || data.length === 0) {
        alert("No data available to download!");
        return;
      }

      // Convert data to CSV
      const csvHeaders = Object.keys(data[0]).join(",") + "\n";
      const csvRows = data
        .map((row) => Object.values(row).join(","))
        .join("\n");
      const csvContent = csvHeaders + csvRows;

      console.log("CSV Content generated:", csvContent);

      // Create a Blob and download the CSV
      const blob = new Blob([csvContent], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "books.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    } catch (error) {
      console.error("Error during download:", error);
      alert("Failed to download the file. Please try again.");
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
          <button onClick={handleDownload}>Download</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
