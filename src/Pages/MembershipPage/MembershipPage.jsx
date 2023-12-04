/* eslint-disable react/prop-types */

import { useState } from "react";
import { Helmet } from "react-helmet-async";


const MembershipPage = () => {
    const [goldBadge, setGoldBadge] = useState();
    console.log(goldBadge);
    const handlePayment = () => {
        setGoldBadge('GOLD-BADGE')
    }
    return (
        <div>
            <Helmet>
                <title>Friendship | Membership</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 pt-20">
                <div className="hero-content flex-col">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Make a payment of $ 20 now and become our member!</h1>
                        <p className="py-6">When you become a gold badge holder you will be able to post more than 5 posts in this community. You will be able to avail more upcoming features that are very much exciting and only available for the gold badge holdersYou can make an announcement and it will be shown in the homepage and all the members can see that-----</p>
                    </div>

                    <button onClick={handlePayment} className='btn btn-ghost border-black'>Make Payment</button>

                </div>
            </div>
        </div>

    );
};

export default MembershipPage;
