import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ToursList from './pages/ToursList';
import TourDetail from './pages/TourDetail';
import MyReservations from './pages/MyReservations';
import Notifications from './pages/Notifications';
import AdminDashboard from './pages/AdminDashboard';
import ManageTours from './pages/ManageTours';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/tours" element={<ToursList />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/tours" element={<ManageTours />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
