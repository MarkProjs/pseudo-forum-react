import { prettyDOM } from "@testing-library/react";
import MiddleBottom from "../MiddleMainContainer/MiddleBottom";
import MiddleCenter from "../MiddleMainContainer/MiddleCenter";
import MiddleTop from "../MiddleMainContainer/MiddleTop";


const MainColumn = (props) => {
    let forumList = props.forumList;
    let setFroumList=props.setFroumList;
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
                            forumList = {forumList}

                            setPost={setPost}
                            setFroumList={setFroumList}
                            handleForumdelete = {handleForumdelete}
                            handleForumLike = {handleForumLike}
                            handleForumdislike={handleForumdislike}
            />
            <MiddleBottom />
            
        </section>
     );
}
 
export default MainColumn;