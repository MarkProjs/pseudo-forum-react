import MiddleBottom from "../MiddleMainContainer/MiddleBottom";
import MiddleCenter from "../MiddleMainContainer/MiddleCenter";
import MiddleTop from "../MiddleMainContainer/MiddleTop";


const MainColumn = (props) => {
    let forumList = props.forumList;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    return ( 
        <section className="middle-main">
            <MiddleTop />
            <MiddleCenter   
                            forumList = {forumList}
                            handleForumdelete = {handleForumdelete}
                            handleForumLike = {handleForumLike}
                            handleForumdislike={handleForumdislike}
            />
            <MiddleBottom />
            
        </section>
     );
}
 
export default MainColumn;