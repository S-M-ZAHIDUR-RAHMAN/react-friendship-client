/* eslint-disable react/prop-types */

const Post = ({item}) => {
    const {photo, title, tags, time, commentsCount, upVote, downVote} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={photo} alt="" />
            <div>
                <h3 className="uppercase">{title}-----</h3>
                <p>Tag: {tags}</p>
                <p>Comments: {commentsCount}</p>
                <p>Up vote: {upVote}</p>
                <p>Down Vote: {downVote}</p>
            </div>
            <p className="text-yellow-500">{time}</p>
        </div>
    );
};

export default Post;