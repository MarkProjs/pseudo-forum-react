import ForumListItem from "../ForumCenter/ForumListItem";

const MiddleCenter = (props) => {
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;
    return ( 
        <section id="middle-center">
            <section id="middle-container">
            <ForumListItem
                            forumData = {forumData} 
                           handleForumdelete = {handleForumdelete}
                           handleForumLike = {handleForumLike}
                           handleForumdislike={handleForumdislike}
                           />
            </section>
        </section>
     );
}
 
export default MiddleCenter;