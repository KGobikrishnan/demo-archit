import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetails/ProjectDetailsPage';
import ApproachPage from './pages/Approach/ApproachPage';
import JournalPage from './pages/Journal/JournalPage';
import JournalDetailsPage from './pages/JournalDetails/JournalDetailsPage';
import ContactPage from './pages/Contact/ContactPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="journal/:slug" element={<JournalDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
