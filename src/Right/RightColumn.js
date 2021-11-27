import RankedTopics from "../RightContainer/RankedTopics";
import RecentPosts from "../RightContainer/RecentPosts";
import StatsPsts from "../RightContainer/StatsPosts";

const RightColumn = () => {
    return ( 
        <section className="right-column">
            <RankedTopics />
            <RecentPosts />
            <StatsPsts />
        </section>
     );
}
 
export default RightColumn;