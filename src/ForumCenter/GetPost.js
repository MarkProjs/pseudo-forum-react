import React, { useEffect, useState } from 'react';
const GetPost = (props) => {
    let showPost = props.showPost;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;
    let [count, setCount] = useState({value:forumData[0].topicList[0]});
   console.log(forumData[0].topicList[0],"我是");
   
    console.log(count,"1");
    useEffect(()=>{
        console.log(count,"shlimian");
        Test();
        console.log(count,"xialimian");
    },[])
    console.log(count,"2");
    const Test = () => {
        setCount((count) => {
            count: showPost(forumData);
            console.log(count, "我在里面没出啦");
            return count;
        })
    }

console.log(count.value["id"], "窝在最下面是id");
    return (
        <section>
            {count.value.listPosts.map((frm, index) => (
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
                                handleForumdelete(frm.id);
                               Test();
                               console.log(count.value["name"], "name");
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