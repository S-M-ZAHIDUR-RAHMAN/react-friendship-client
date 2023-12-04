import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Membership = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/VtVNBh8/Concert1.jpg')] bg-cover bg-fixed text-white pt-8 my-20">
            <SectionTitle heading={"Membership"} subHeading={"Get a Gold badge"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
            <div>
                <img src={`https://i.ibb.co/ncnQr4q/adidas-pro-2.jpg`} alt="" />
            </div>
            <div className="md:ml-10">
                <h2>Be a member</h2>
                <p className="uppercase">Pay just $20</p>
                <p className="uppercase">&</p>
                <p className="uppercase">Get Gold badge</p> 
                <p>When you become a gold badge holder you will be able to post more than 5 posts in this community. You will be able to avail more upcoming features that are very much exciting and only available for the gold badge holders</p>
                <Link to="/membership"><button className="btn btn-outline border-0 border-b-4">Be a member</button></Link>
            </div>
            </div>

        </div>
    );
};

export default Membership;