import {
  Navigate,
  useLocation,
} from 'react-router-dom';
import useAuth from '../hooks/api/auth/useAuth'

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token && !sessionStorage.token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};
