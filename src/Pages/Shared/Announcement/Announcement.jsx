/* eslint-disable react/prop-types */

const Announcement = ({announcement}) => {
    
    const {photo, name, title, description } = announcement;
    

    return (
        <div className="px-3 md:px-0">
        <div className="flex space-x-4">
        <img style={{borderRadius: '200px 200px 0 200px'}} className="w-[120px] h-[80px]" src={photo} alt="" />
        <div>
            <h3 className="uppercase font-bold">{title}-----</h3>
            <p>{description}</p>
            <p className="italic"><small>Announced by: {name}</small></p>
        </div>
    </div>
    </div>
    );
};

export default Announcement;