import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Banner from './Banner';
import Footer from './Footer';
import Tutoring from './Tutoring';
import PersonalProjects from './PersonalProjects';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/personalprojects" element={<PersonalProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);