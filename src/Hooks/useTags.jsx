
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useTags = () => {

    //tan stack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user?.email);
    const { refetch, data: tags = [] } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tags`)
            return res.data;
        }
    })
    return [tags, refetch]
}
export default useTags;