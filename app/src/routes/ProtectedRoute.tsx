import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const token = useSelector((state: any) => state.auth.token);

    // not logged in → go to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // logged in → allow nested routes
    return <Outlet />;
};

export default ProtectedRoute;
