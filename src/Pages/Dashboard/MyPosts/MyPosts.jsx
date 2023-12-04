import { FaCommentDots, FaRegTrashCan } from "react-icons/fa6";
// import useMyPosts from "../../../Hooks/usePosts";
import swal from "sweetalert";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import usePosts from "../../../Hooks/usePosts";


const MyPosts = () => {
    const { user } = useAuth();
    const [posts, refetch] = usePosts();
    console.log(posts);
    const [myAllPosts, setMyAllPosts] = useState([]);


    const email = user?.email;


    useEffect(() => {
        const findMyPosts = posts?.filter(post => post?.email === email);
        setMyAllPosts(findMyPosts || []);
    }, [email, posts])
    console.log(myAllPosts);


    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/posts/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                swal("Your post has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                }
            })
    };



    return (
        <div>
            <div className="flex justify-evenly mb-5">
                <h2 className="text-4xl">Total Posts: {myAllPosts?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Post Title</th>
                            <th>No. of Votes</th>
                            <th>Comments</th>
                            <th>Delete Post</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAllPosts && myAllPosts?.map((item, index) => <tr key={item?._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.title}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span className="badge badge-ghost badge-lg">Up Vote: {item?.upVote}</span>
                                    <span className="badge badge-ghost badge-lg">Down Vote: {item?.downVote}</span>
                                </td>
                                <td><button className="btn btn-ghost btn-xs"><FaCommentDots></FaCommentDots></button></td>
                                <th>
                                    <button onClick={() => handleDelete(item?._id)} className="btn btn-ghost btn-xs"><FaRegTrashCan></FaRegTrashCan></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPosts;