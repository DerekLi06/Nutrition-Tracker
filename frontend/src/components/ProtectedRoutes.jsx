import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isAuth } = useSelector((state) => state.auth || { isAuth: false });
    return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;