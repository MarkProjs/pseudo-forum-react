import React, { useEffect, useState } from 'react';


const FromListItem = (props) => {
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let handleForumdislike = props.handleForumdislike;
    let forumData = props.forumData;
    let [count, setCount] = useState(null);
    
   
    
   useEffect(()=>{
        console.log(count,"我在effect里面");   
        setCount((count)=>{
            
            count = showPost(forumData);
            console.log(count, "wozailimian");
            return count;
        });
   },[/*showPost(forumData)*/]);
   
    // const Test = () => {
    //     setCount((count) => {
            
    //         console.log(count, "我在里面没出啦");
    //         return count;
    //     })
    // }

    // let [post, setPost] = useState(null);
    //  setPost(forumData);

    // useEffect(()=>{
    //     showPost(forumData);
          
    // });
    
    function showPost(forumData) {
        let newPost = [];
        let topic = document.getElementById("topic").value;
        let category = document.getElementById("category").value;
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
        // let topicName = newPost["topicList"];
      
    //    console.log(newPost, "post");
        return newPost;
    }

    return (
        <section id="forum-list">
            {forumData[0].topicList[1].listPosts.map((frm, index) => (
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
                                // handleForumdelete(frm.id);
                               
                              
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