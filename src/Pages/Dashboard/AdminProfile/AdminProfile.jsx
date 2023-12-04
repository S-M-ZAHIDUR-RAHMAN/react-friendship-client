import useAuth from "../../../Hooks/useAuth";

const AdminProfile = () => {
    const { user } = useAuth();
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl">Admin Profile: {user?.displayName}</h2>
            <p className="font-bold">email: {user?.email}</p>
            <div className="border-black">
            <img src={user?.photoURL} alt="" />
        </div>
        </div>
        
    );
};

export default AdminProfile;