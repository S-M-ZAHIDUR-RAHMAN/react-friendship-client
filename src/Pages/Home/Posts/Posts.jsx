
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import usePosts from "../../../Hooks/usePosts";
import Post from "../../Shared/Post/Post";

const Posts = () => {
    const [posts] = usePosts();
    posts.sort((a, b) => new Date(b.time) - new Date(a.time));
    return (
        <div>
            <section className="mb-12">
                <SectionTitle heading={"Posts"} subHeading={"All the posts are here"}></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-10 px-6">
                {
                    posts.map(item => <Post key={item._id} item={item}></Post>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 px-6">View all Posts</button>
            </div>

        </div>
    )
};

export default Posts;