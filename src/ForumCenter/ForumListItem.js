import { useState } from "react";

const FromListItem = ({handleForumdelete}) => {

    let [forumList] = useState([
        {"id": 1, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "nasr", "date": "2021-11-10 12:10", "text": "Are You Making These Coding using REactJS Mistakes?", "rate": 2.1, "like": 0, "replies": 10},
        {"id": 2, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "badr", "date": "2021-11-14 12:30", "text": "This is a post TWO topic- SuperEasy Ways To Learn And Use REactJS", "rate": 2.1, "likes": 0, "replies": 5 },
        {"id": 3, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "tricia", "date": "2021-10-16 12:30", "text": "This is a post 3- The Lazy Way To Coding using REactJS", "rate": 4.1, "likes": 22, "replies": 20 },
        {"id": 4, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "dan", "date": "2018-12-09 11:30", "text": "This is a post 4 - Coding using REactJS Expert Interview", "rate": 3.1, "likes": 10, "replies": 15},
        {"id": 5, "topic_id": "cat1_topic1_post1", "parentId": "topic1",  "author": "tricia", "date": "2021-05-11 12:30", "text": "This is a post 5-Brilliant Ways To Use Coding using REactJS", "rate": 4.1, "likes": 22, "replies": 20 }
    ]);

    return ( 
        <section id="forum-list">

        { forumList.map((frm)=> (
                     <section className="list-single-item" key={frm.id}>
                        <section className="item-row-info">
                            <input type="text" value={frm["text"]} />
                            <label htmlFor="">we should add icones {frm.id}</label>
                        </section>
                        
                     <section className="item-row-info">
                         <label htmlFor="">by: {frm["author"]}</label>
                         <label htmlFor="">{frm["date"]}</label>
                         <label htmlFor="">Likes: {frm["likes"]}</label>
                         { <button className="forum-delete" 
                                    onClick={()=> {
                                        handleForumdelete(frm.id);
                           } }>
                                delete
                         </button> }
                     </section>
                    </section>
                )
             )}

        </section>
     );
}
 
export default FromListItem;