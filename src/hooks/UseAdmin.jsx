import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`users/admin/${user.email}`);
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading];
};

export default UseAdmin;