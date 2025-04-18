import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import Banner from './Banner';
import Footer from './Footer';
import Tutoring from './Tutoring';
import PersonalProjects from './PersonalProjects';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const lang = 'en'; // Sets the language
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Banner lang={lang} />
        <Navbar lang={lang} />
        <Routes>
          {/* 👇 Redirect from "/" to "/en" */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          <Route path={"/"+lang} element={<App lang={lang} />} />
          <Route path={"/"+lang+"/tutoring"} element={<Tutoring lang={lang} />} />
          <Route path={"/"+lang+"/personalprojects"} element={<PersonalProjects lang={lang} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);