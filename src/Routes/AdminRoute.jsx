import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import userAuth from "../hooks/userAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = userAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-warning loading-lg"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace ></Navigate>;
};

export default AdminRoute;