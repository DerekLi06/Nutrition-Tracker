import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const { isAuth } = useSelector((state) => state.auth || { isAuth: false });
    return isAuth ? <Navigate to="/homepage" replace /> : children;
};

export default PublicRoute;