import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = UseAuth();

    if (loading) {
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

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location}></Navigate>;
};

export default PrivateRoute;