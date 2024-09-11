import { Navigate } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";
import UseAuth from "../hooks/UseAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();

    if (loading || isAdminLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh' // Takes up the full viewport height
                }}
            >
                <progress className="progress w-56"></progress>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/'></Navigate>;
};

export default AdminRoute;