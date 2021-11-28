import RankedTopics from "../RightContainer/RankedTopics";
import RecentPosts from "../RightContainer/RecentPosts";
import StatsPsts from "../RightContainer/StatsPosts";

const RightColumn = (props) => {
    let forumList = props.forumList;

    return ( 
        <section className="right-column">
            <RankedTopics 
               forumList = {forumList}
            />
            <RecentPosts />
            <StatsPsts />
        </section>
     );
}
 
export default RightColumn;