import { FaAdn, FaBoltLightning, FaBullhorn, FaEnvelope, FaFaceSmile, FaHouse, FaList, FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex-row md:flex-row lg:flex">
            {/* dashboard sidebar */}
            <div className="min-w-screen lg:w-64 md:min-h-screen bg-slate-500">
                <ul className="menu md:p-4">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminProfile">
                                        <FaFaceSmile></FaFaceSmile>
                                        Admin Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaList></FaList>
                                        Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reportedComments">
                                        <FaAdn></FaAdn>
                                        Reported Comments
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/announcements">
                                        <FaBullhorn></FaBullhorn>
                                        Make Announcements
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myProfile">
                                        <FaFaceSmile></FaFaceSmile>
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/posts">
                                        <FaEnvelope></FaEnvelope>
                                        My Posts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addPost">
                                        <FaBoltLightning></FaBoltLightning>
                                        Add Post
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/membership">
                            <FaPeopleGroup></FaPeopleGroup>
                            Membership
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;