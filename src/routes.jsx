import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Public/HomePage/HomePage';
import EventsPage from './pages/Public/EventsPage/EventsPage';
import EventDetailPage from './pages/Public/EventDetailPage/EventDetailPage';
import LoginPage from './pages/Auth/LoginPage/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Routes Publiques */}
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
