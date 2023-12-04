import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePosts = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user?.email);
    const { refetch, data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/posts`)
            return res.data;
        }
    })
    return [posts, refetch]
};

export default usePosts;