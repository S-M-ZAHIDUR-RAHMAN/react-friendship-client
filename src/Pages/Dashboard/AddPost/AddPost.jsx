import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import usePosts from "../../../Hooks/usePosts";
import swal from "sweetalert";

const AddPost = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = usePosts();
    console.log(user);
    const handleMakeAnnouncement = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const name = user?.displayName;
        const photo = user?.photoURL;
        const email = user?.email;
        const time = new Date();
        const newPost = { photo, name, email, title, description, tags, time };
        console.log(newPost);

        //send data to the server
        if (name) {
            axiosSecure.post('/posts', newPost)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        //refetch to update the announcement update count
                        refetch();
                        swal("Posted successfully!")
                    }
                })

        }
        else {
            swal("Please login first to post!")
            navigate('/login', { state: { from: location } })

        }

    }
    return (
        <>
            <Helmet>
                <title>Friendship | Add Post</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Add a Post Now!</h1>
                        <p className="py-6">You can make a Post and it will be shown in the homepage and all the members can see that-----</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleMakeAnnouncement} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tag</span>
                                </label>
                                <input type="text" name="tags" placeholder="Tag" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add Post" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPost;