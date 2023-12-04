import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import usePosts from "../../../Hooks/usePosts";

const MyProfile = () => {
    const { user } = useAuth();
    const [posts] = usePosts();
    console.log(posts);
    const [myAllPosts, setMyAllPosts] = useState([]);


    const email = user?.email;


    useEffect(() => {
        const findMyPosts = posts?.filter(post => post?.email === email);
        setMyAllPosts(findMyPosts || []);
    }, [email, posts])
    console.log(myAllPosts);
    return (
        <div>
            <div>
                <h2 className="text-3xl">My posts: {myAllPosts.length}</h2>
            </div>
            <div>
              
            </div>
            <div className="mt-5">
            {
                myAllPosts && myAllPosts?.map((item) => <div className="mt-8" key={item?._id}>

                    <div className="flex space-x-4">
                        <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px] h-[100px]" src={item?.photo} alt="" />
                        <div>
                            <h3 className="uppercase">{item?.title}-----</h3>
                            <p>{item?.description}</p>
                            <p>Tag: {item?.tags}</p>
                            <p>Comments: {item?.commentsCount}</p>
                            <p>Up vote: {item?.upVote}</p>
                            <p>Down Vote: {item?.downVote}</p>
                            <p>User Name: {item?.name}</p>
                            <p>Email: {item?.email}</p>
                        </div>
                        <p className="text-yellow-500">{item?.time}</p>
                    </div>
                </div>)
            }
            </div>
           
        </div>
    );
};

export default MyProfile;