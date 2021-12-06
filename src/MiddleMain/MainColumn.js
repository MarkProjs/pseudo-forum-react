import { prettyDOM } from "@testing-library/react";
import MiddleBottom from "../MiddleMainContainer/MiddleBottom";
import MiddleCenter from "../MiddleMainContainer/MiddleCenter";
import MiddleTop from "../MiddleMainContainer/MiddleTop";


const MainColumn = (props) => {
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;
    let post = props.pos;
    let setPost=props.setPost;
    return ( 
        <section className="middle-main">
            <MiddleTop
                 forumData={forumData}
                 setPost={setPost}
                 post={post}
             />
            <MiddleCenter   
                            forumData = {forumData}

                            setPost={setPost}
                            handleForumdelete = {handleForumdelete}
                            handleForumLike = {handleForumLike}
                            handleForumdislike={handleForumdislike}
            />
            <MiddleBottom />
            
        </section>
     );
}
 
export default MainColumn;