import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const token = useSelector((state: any) => state.auth.token);

    // Already logged in → redirect to home
    if (token) {
        return <Navigate to="/home" replace />;
    }

    // Not logged in → show login/register routes
    return <Outlet />;
};

export default PublicRoute;
