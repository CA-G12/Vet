import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';

import Doctors from './pages/Doctors';
import Emergency from './pages/Emergency';
import DoctorProfile from './pages/DoctorProfile';

import NotFound from './pages/NotFound';
import ApiService from './services/ApiService';
import { LandingPage } from './components/LandingPage';
import './index.css';
import ChatRoom from './pages/ChatRoom';

ApiService.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'home', element: <Home /> },
      { path: 'doctors', element: <Doctors /> },
      {
        path: 'emergency',
        element: <Emergency />,
      },
      {
        path: 'chatroom/:id',
        element: <ChatRoom />,
      },
      { path: 'users/:id', element: <DoctorProfile /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
