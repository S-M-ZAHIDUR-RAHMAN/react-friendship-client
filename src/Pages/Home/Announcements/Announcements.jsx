import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAnnouncements from "../../../Hooks/useAnnouncements";
import Announcement from "../../Shared/Announcement/Announcement";

const Announcements = () => {
    const [announcements] = useAnnouncements();
    return (

        <div>
            {announcements?.length > 0 && (
            <section className="mb-12">
                <SectionTitle heading={"Announcements"} subHeading={"All the announcements are here"}></SectionTitle>
            </section>
            )}

            {announcements.length > 0 && (
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        announcements?.map(announcement => <Announcement key={announcement?._id} announcement={announcement}></Announcement>)
                    }
                </div>
            )}
        </div>
    );
};

export default Announcements;