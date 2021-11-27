import ForumListItem from "../ForumCenter/ForumListItem";

const MiddleCenter = ({forumList, handleForumdelete}) => {

    return ( 
        <section id="middle-center">
            <section>
                <ForumListItem 
                           forumList={forumList}
                           handleForumdelete = {handleForumdelete}
                           />
            </section>

        </section>
     );
}
 
export default MiddleCenter;