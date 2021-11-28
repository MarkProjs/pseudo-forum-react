import ForumListItem from "../ForumCenter/ForumListItem";

const MiddleCenter = (props) => {
    let forumList = props.forumList;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    return ( 
        <section id="middle-center">
            <section>
                <ForumListItem 
                           forumList={forumList}
                           handleForumdelete = {handleForumdelete}
                           handleForumLike = {handleForumLike}
                           handleForumdislike={handleForumdislike}
                           />
            </section>

        </section>
     );
}
 
export default MiddleCenter;