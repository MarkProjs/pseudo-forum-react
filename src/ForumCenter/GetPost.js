import React, { useEffect, useState } from 'react';
const GetPost = (props) => {
    let showPost = props.showPost;
    // let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;
    let [count, setCount] = useState(forumData[0].topicList[0]);
    
    function handleForumdelete(frmId) {
        console.log(frmId,"frmId");
        // setCount(count.listPosts.filter((frm)=>{
        //     return frm.id !== frmId;
        // }));
    }

   
    console.log(count,"1");
    useEffect(()=>{
        console.log(count,"shlimian");
        // Test();
        console.log(count,"xialimian");
    },[count])
    console.log(count,"2");
    
    const Test = () => {
        setCount((count) => {
            count= showPost(forumData);
            console.log(count, "我在里面没出啦");
            return count;
        })
    }

    return (
        <section>
            {count.listPosts.map((frm, index) => (
                <section className="list-single-item" key={frm.id}>
                    <section className="item-row-info">
                        <label htmlFor="">add icons {frm.id}</label>
                        <input type="text" value={frm.text} />
                        <img src="./like-button.png" id="like" alt="like" onClick={() => {
                            handleForumLike(frm, index);

                        }} />
                        <img src="./dislike-icon-5.png" id="dislike"
                            onClick={() => {
                                setTimeout(handleForumdislike(frm, index), 100);
                            }} alt="dislike" />
                    </section>

                    <section className="item-row-info">
                        <label htmlFor="">by: {frm["author"]}</label>
                        <label htmlFor="">{frm["date"]}</label>
                        <label className="likesAndDislike" htmlFor="">Likes: {frm.likes}</label>
                        <button className="forum-delete"
                            onClick={() => { 
                                // handleForumdelete(frm.id);
                               Test();
                               console.log(count["topic_title"], "name");
                            }}>
                            delete
                        </button>
                    </section>
                </section>
            ))}
        </section>
    );
}
export default GetPost;