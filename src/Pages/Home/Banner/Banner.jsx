import { useEffect, useState } from "react";
import usePosts from "../../../Hooks/usePosts";

const Banner = () => {
    const [posts] = usePosts();
    const [searchTag, setSearchTag] = useState([]);
    const [searchPosts, setSearchPosts] = useState([]);
    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        setSearchTag(search);
    }
    useEffect(() => {
        const findMySearch = posts?.filter(post => post?.tags === searchTag);
        setSearchPosts(findMySearch || []);
    }, [searchTag, posts])
    console.log(searchPosts);

    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={{ backgroundImage: 'url(https://i.ibb.co/7S8kmFP/banner.jpg)' }}>
            <div className="cover"></div>
            <div className="p-0 text-center text-neutral-content">
                <div className="w-[90vw] text-left text-white">
                    
                    <p className="mb-5 p-4 hero-overlay text-4xl"> Searching... <span className="font-bold underline text-yellow-300">Friendship?</span></p>
                </div>
                <div className="">
                    <form onSubmit={handleSearch} className="flex md:flex-row flex-col gap-2 justify-center">
                        <input className="pl-3 py-3 lowercase text-black" type="text" placeholder="Tags only" name="search" id="" />
                        <input className="btn accent-slate-500" type="submit" value="Search Post Title" />
                    </form>
                </div>
                <div className="">
                    {
                        searchPosts && searchPosts?.map(searchPost =>
                            <div className="mt-2" key={searchPost._id}>
                                <button className="btn accent-slate-500">{searchPost?.title}</button>

                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Banner;