import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import userAuth from "./userAuth";


const useCarts = () => {


    // tan stack query
    const axiosSecure = useAxiosSecure();
    const { user } = userAuth();


    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch];

};

export default useCarts;