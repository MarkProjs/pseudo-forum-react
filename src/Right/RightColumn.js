import RankedTopics from "../RightContainer/RankedTopics";
import RecentPosts from "../RightContainer/RecentPosts";
import StatsPsts from "../RightContainer/StatsPosts";

const RightColumn = (props) => {

    let forumData = props.forumData;

    return ( 
        <section className="right-column">
            <RankedTopics 
                forumData={forumData}
            />
            <RecentPosts
                forumData={forumData}
            />
            <StatsPsts 
                forumData={forumData}
            />
        </section>
     );
}
 
export default RightColumn;