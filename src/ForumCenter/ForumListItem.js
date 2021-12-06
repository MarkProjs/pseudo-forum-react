import React, { useEffect, useState } from 'react';


const FromListItem = (props) => {
    let forumList = props.forumList;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;

   
    let [post, setPost] = useState(null);
    useEffect(()=>{

    });

    function showPost(){
        
    }
    // const showPost = (topic, category) => {
    //     setPost((post) => {
    //         // let topic = document.getElementById("topic").value;
    //         // let category = document.getElementById("category").value;
    //         let newOptionsArray = {};
    //         Object.keys(forumData).find((elem) => {
    //             if (forumData[elem].name === category) {
    //                 // console.log("yes",options[elem]);
    //                 newOptionsArray = forumData[elem];
    //                 return forumData[elem];
    //             }
    //         });
    //         Object.keys(newOptionsArray).find((elem) => {
    //             if (newOptionsArray[elem].topicList === topic) {
    //                 // console.log("yes",options[elem]);
    //                 newOptionsArray = newOptionsArray[elem];
    //                 return newOptionsArray[elem];
    //             }
    //         });
    //         post = newOptionsArray;
    //        return post;
    //     });
    // }
   
    return (
        <section id="forum-list">
            {forumList.map((frm, index) => (
                <section className="list-single-item" key={frm.id}>
                    <section className="item-row-info">
                        <label htmlFor="">add icons {frm.id}</label>
                        <input type="text" value={frm["text"]} />
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
                            }}>
                            delete
                        </button>
                    </section>
                </section>
            ))}
        </section>
    );
}

export default FromListItem;