import ForumListItem from "../ForumCenter/ForumListItem";

const MiddleCenter = (props) => {
    let forumList = props.forumList;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let dislike = props.dislike
    return ( 
        <section id="middle-center">
            <section>
                <ForumListItem 
                           forumList={forumList}
                           handleForumdelete = {handleForumdelete}
                           handleForumLike = {handleForumLike}
                           dislike = {dislike}
                           />
            </section>

        </section>
     );
}
 
export default MiddleCenter;