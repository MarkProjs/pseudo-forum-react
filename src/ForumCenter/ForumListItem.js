import React from 'react';
import { useState } from "react";

const FromListItem = (props) => {
    let forumList = props.forumList;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    
    let [likeUnlike, setLikeUlike]=useState(0);
    
    // const forumLike = (likes ,index)=>{
    //     let likeId = document.getElementsByClassName("likesAndDislike");
    //     likeUnlike=likes;
    //     // console.log(likes, index);
    //     setLikeUlike(likeUnlike+1);
    //     console.log(likeUnlike);
    //     likeId[index].innerText="Likes: "+likeUnlike;
    // }
    return (
        <section id="forum-list">
            {forumList.map((frm, index) => (
                <section className="list-single-item" key={frm.id}>
                    <section className="item-row-info">
                        <label htmlFor="">add icons {frm.id}</label>
                        <input type="text" value={frm["text"]} />
                        <img src="./like-button.png" id="like" 
                        onClick={()=>{
                            // setLikeUlike(likeUnlike+1);
                            // forumLike(frm.likes ,index);
                            handleForumLike(frm.likes ,index);
                        }}
                        alt="like"/>
                        <img src="./dislike-icon-5.png" id="dislike"
                            onClick={() => {
                                // handleForumdislike(frm.likes ,index);
                                
                            }} alt="dislike"/>
                    </section>

                    <section className="item-row-info">
                        <label htmlFor="">by: {frm["author"]}</label>
                        <label htmlFor="">{frm["date"]}</label>
                        <label className="likesAndDislike" htmlFor="">Likes: {frm["likes"]}</label>
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