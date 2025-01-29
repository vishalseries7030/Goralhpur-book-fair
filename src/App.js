import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EventManagement from './components/EventManagement';
import ScheduledEvents from './components/ScheduledEvents';
import Speakers from './components/SpeakersManagement';
import Books from './components/Books';
import UserManagement from './components/UserManagement';
// import DownloadButton from './components/DownloadButton';

const App = () => {
  return (
    <Router>
      <div className="App bg-gray-50 min-h-screen">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Section */}
        <main className="p-6">
          {/* Download Button Section */}
          {/* <section className="mb-6">
            <DownloadButton />
          </section> */}

          {/* Routes for different components */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/events" element={<EventManagement />} />
            <Route path="/scheduled-events" element={<ScheduledEvents />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/books" element={<Books />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;



// // App.js
// import React from 'react';
// import DownloadButton from './components/DownloadButton';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="bg-gray-800 text-white text-center py-4">
//         <h1 className="text-3xl font-bold">User Data Download</h1>
//         <p className="text-lg mt-2">Click the button below to download user data in CSV format.</p>
//       </header>
//       <main>
//         <DownloadButton />
//       </main>
//     </div>
//   );
// };

// export default App;




// // App.js
// import React from 'react';
// import DownloadButton from './components/DownloadButton';  // Import the DownloadButton component

// function App() {
//   return (
//     <div className="App">
//       <h1>Gorakhpur Book Fair</h1>
//       <DownloadButton /> {/* Render the DownloadButton */}
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import DownloadButton from './components/DownloadButton'; // Make sure this path is correct

// function App() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Gorakhpur Book Fair</h1>
//             <DownloadButton />
//         </div>
//     );
// }

// export default App;
