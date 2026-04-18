import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/shared/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ToursList from './pages/ToursList';
import TourDetail from './pages/TourDetail';
import MyReservations from './pages/MyReservations';
import Notifications from './pages/Notifications';
import AdminDashboard from './pages/AdminDashboard';
import ManageTours from './pages/ManageTours';
import ManageUsers from './pages/ManageUsers';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/tours" element={<ToursList />} />
            <Route path="/tours/:id" element={<TourDetail />} />

            {/* Rutas que requieren autenticación */}
            <Route
              path="/my-reservations"
              element={
                <ProtectedRoute>
                  <MyReservations />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />

            {/* Rutas de administrador */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/tours"
              element={
                <ProtectedRoute requireAdmin>
                  <ManageTours />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute requireAdmin>
                  <ManageUsers />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
