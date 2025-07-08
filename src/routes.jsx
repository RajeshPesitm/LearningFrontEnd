import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LoginLayout from "./components/layouts/LoginLayout.jsx";
import DashboardLayout from "./components/layouts/DashboardLayout.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import AdminDashboard from "./components/pages/AdminDashboard.jsx";
import UserDashboard from "./components/pages/UserDashboard.jsx";
import NotFound from "./components/pages/NotFound.jsx";

function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardSelector />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Renders dashboard based on role
function DashboardSelector() {
  const { user } = useAuth();
  if (user?.role === "admin") return <AdminDashboard />;
  if (user?.role === "user") return <UserDashboard />;
  return <Navigate to="/login" />;
}