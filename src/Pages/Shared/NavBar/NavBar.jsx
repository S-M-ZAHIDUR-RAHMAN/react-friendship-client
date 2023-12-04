import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBullhorn } from "react-icons/fa6";
import useAnnouncements from "../../../Hooks/useAnnouncements";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [announcements] = useAnnouncements();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }

    const navOptions = <div className="md:flex md:flex-col md:items-center lg:flex-row">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            
                <button className="btn">
                    <FaBullhorn></FaBullhorn>
                    <div className="badge p-1 text-lg bg-yellow-500">+{announcements?.length}</div>
                </button>
         
        </li>

        {
            user ?
                <></>
                :
                <>
                    <li><Link to="/login">Join Us</Link></li>
                </>
        }
   </div>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52 md:px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="text-white rounded-full px-4 bg-slate-500 flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:gap-2">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M36.009,5.074H13.991C9.025,5.074,5,9.099,5,14.064V36c0,4.965,4.025,8.991,8.991,8.991h22.019	C40.975,44.99,45,40.965,45,36V14.064C45,9.099,40.975,5.074,36.009,5.074z M16.171,36.755c-0.372,0.636-1.041,0.989-1.728,0.989	c-0.343,0-0.691-0.088-1.009-0.274c-0.953-0.559-1.273-1.784-0.714-2.736l0.291-0.497c0.515-0.162,1.057-0.25,1.614-0.234l0.005,0	c1.023,0.03,1.879,0.493,2.464,1.176L16.171,36.755z M27.413,32H12c-1.104,0-2-0.896-2-2s0.896-2,2-2h4.665l5.866-10.01	l-1.811-3.091c-0.559-0.953-0.239-2.178,0.714-2.737c0.953-0.558,2.178-0.239,2.737,0.714l0.678,1.157l0.678-1.157	c0.558-0.953,1.783-1.272,2.737-0.714c0.953,0.559,1.273,1.784,0.714,2.737L21.301,28h4.18c0.625,0.416,1.162,0.966,1.549,1.64	l0.003,0.004C27.473,30.409,27.57,31.237,27.413,32z M38,32h-2.623l1.602,2.733c0.559,0.952,0.239,2.178-0.714,2.736	c-0.318,0.187-0.666,0.274-1.009,0.274c-0.687,0-1.355-0.354-1.728-0.989l-6.151-10.497c-0.834-1.549-0.803-3.427,0.109-4.943	l0.826-1.373L33.033,28H38c1.104,0,2,0.896,2,2S39.104,32,38,32z"></path>
                        </svg>
                        <a className="btn btn-ghost text-xl text-yellow-300">Friendship</a>
                    </div>

                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white border border-slate-500">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {

                        user &&
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost m-1 rounded-full border border-white"><img className="w-10 rounded-full " src={user?.photoURL} alt="" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black opacity-40 rounded-box w-80 gap-3 pb-6">
                                <div className="flex justify-center p-4 font-bold  text-xl bg-gray-800 rounded-full">
                                    <h2 className="text-white uppercase">{user?.displayName}</h2>
                                </div>

                                <Link to="/dashboard"><button className="btn btn-ghost border w-full border-white text-lg hover:bg-slate-500">Dashboard</button></Link>
                                <button onClick={handleLogOut} className="btn btn-ghost border border-white text-lg hover:bg-slate-500">Log Out</button>
                            </ul>
                        </div>

                    }

                </div>
            </div>
        </>
    );
};

export default NavBar;