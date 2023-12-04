import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAnnouncements from "../../../Hooks/useAnnouncements";




const MakeAnnouncements = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useAnnouncements();
    console.log(user);
    const handleMakeAnnouncement = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const name = user?.displayName;
        const photo = user?.photoURL;
        const newAnnouncement = { name, photo, title, description };
        console.log(newAnnouncement);

        //send data to the server
        if (name) {
            axiosSecure.post('/announcements', newAnnouncement)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        //refetch to update the announcement update count
                        refetch();
                        swal("Announcement made successfully!")
                    }
                })

        }
        else {
            swal("Please login first to make announcement!")
            navigate('/login', { state: { from: location } })

        }

    }
    return (
        <>
            <Helmet>
                <title>Friendship | Make Announcement</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-3xl font-bold">Make an Announcement now!</h1>
                        <p className="py-6">You can make an announcement and it will be shown in the homepage and all the members can see that-----</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleMakeAnnouncement} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Make Announcement" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeAnnouncements;