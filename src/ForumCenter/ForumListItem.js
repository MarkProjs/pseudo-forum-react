import React, { useEffect, useState } from 'react';
import GetPost from './GetPost';


const FromListItem = (props) => {
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;
    
   
    
//     useEffect(()=>{
//         let topc = document.getElementById("topic");
//         // // topc.addEventListener('click', ()=>{
//             // showPost(forumData) 
//             Test();
//         // // });
//         console.log(count, "我在effect里面");
       
//         // Topic();
//     },[forumData]);

    function showPost(forumData) {
        let newPost = [];
        let topic = document.getElementById("topic").value;
        let category = document.getElementById("category").value;
        if(category === undefined || topic === undefined){

        }else{
            Object.keys(forumData).map((elem) => {
                if(forumData[elem].name === category){
                 let topicName=forumData[elem].topicList;
                 //    console.log(topicName, "name");
                    topicName.map((elem)=>{
                      if(elem.topic_title === topic){
                         newPost=elem;
                      }
                    })
                }
                 return forumData[elem].name === category
         });
     return newPost;
        }
    }

    return (
        <section id="forum-list">
            <GetPost
            showPost={showPost}
            forumData = {forumData}
            handleForumdelete = {handleForumdelete}
            handleForumLike = {handleForumLike}
            handleForumdislike={handleForumdislike}
            />
        </section>
    );
}

export default FromListItem;