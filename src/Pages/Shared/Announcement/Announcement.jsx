/* eslint-disable react/prop-types */

const Announcement = ({ announcement }) => {

    const { photo, name, title, description } = announcement;


    return (
        <div className="px-3 md:px-0">
            <div className="flex-1 space-x-4">
                <div className="">
                    <img style={{ borderRadius: '200px 200px 0 200px' }} className="w-[120px]" src={photo} alt="" />
                </div>
                <div style={{ borderRadius: '0 200px 200px 200px' }} className="flex-grow border border-black px-8 md:py-2 py-10">
                    <h3 className="uppercase font-bold">{title}-----</h3>
                    <p>{description}</p>
                    <p className="italic"><small>Announced by: {name}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Announcement;