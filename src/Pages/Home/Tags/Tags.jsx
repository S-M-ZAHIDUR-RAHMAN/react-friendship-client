import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useTags from "../../../Hooks/useTags";
import Tag from "../../Shared/Tag/Tag";

const Tags = () => {
    const [tags] = useTags();
    console.log(tags);
    return (
        <div>
            <section>
                <SectionTitle heading={"Tags"} subHeading={"Use these tags to post and search"}></SectionTitle>
            </section>
            <div className="grid grid-cols-2 px-2 md:grid-cols-4 gap-5 md:px-10">
            {
                tags?.map(eachTag => <Tag key={eachTag._id} eachTag={eachTag}></Tag>)
            }
            </div>
            
        </div>
    );
};

export default Tags;