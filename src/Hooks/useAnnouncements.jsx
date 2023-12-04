import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAnnouncements = () => {

    //tan stack query
    const axiosSecure = useAxiosSecure();
    const{refetch, data: announcements=[0]} = useQuery({
        queryKey: ['announcements'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/announcements')
            return res.data;
        }
    })
    return [announcements, refetch]
}
export default useAnnouncements;