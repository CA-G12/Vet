import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Emergency from './pages/Emergency';
import DoctorProfile from './pages/DoctorProfile';
import NotFound from './pages/NotFound';
import ApiService from './services/ApiService';

ApiService.init();
ApiService.setHeader();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'home', element: <Home /> },
      { path: 'doctors', element: <Doctors /> },
      {
        path: 'emergency',
        element: <Emergency />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
