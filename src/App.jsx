// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <--- Only import Routes and Route here

// Import common layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import your page components
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';

function App() {
  return (
    <div className='bg-[#F8F7F9]'> 
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Work />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;