import LeftColumn from "../Left/LeftColumn";
import MainColum from "../MiddleMain/MainColumn";
import RightColumn from "../Right/RightColumn";
import React, { useEffect, useState } from "react";
//import FromListItem from "../ForumCenter/ForumListItem";


const Main = () => {
    let [forumData, setFroumData] = useState(null);
    let [post, setPost]= useState(null);
    //npx json-server --watch data/forum.json --port 3001
    console.log("npx json-server --watch data/forum.json --port 3001");
    useEffect(() => {
        let url = 'http://localhost:3001/categories';
        fetch(url).then((resp) => {
            if (!resp.ok) {
                throw new Error('http pbm status', resp.Error);
            } else {
                return resp.json();
            }
        }).then(data => {
            setFroumData(data);
        
        }).catch(err => console.log(err.message));
    }, []);



       
  
    function handleForumdelete(frmId) {
        console.log("delete forum", frmId);
        setFroumData(forumData.filter((frm) => {
            return frm.id !== frmId;
        }));
    }

    function handleForumLike(frm, index) {
        // console.log(posts);
        let likeId = document.getElementsByClassName("likesAndDislike");
        frm.likes = frm.likes + 1;
        likeId[index].innerText = "Likes: " + `${frm.likes++}`;
        frm.likes = frm.likes - 1;
    }
    
    function handleForumdislike(frm, index) {
        let likeId = document.getElementsByClassName("likesAndDislike");
        frm.likes = frm.likes - 1;
        likeId[index].innerText = "Likes: " + `${frm.likes--}`;
        frm.likes = frm.likes + 1;
    }
    
    return (
        <section id="main-content">
            <LeftColumn />
            {forumData && <MainColum
                forumData={forumData}
                post={post}
                setPost={setPost}
                handleForumdelete={handleForumdelete}
                handleForumLike={handleForumLike}
                handleForumdislike={handleForumdislike}

            />}
            <RightColumn
                forumData={forumData}
                
            />
        </section>
    );
}

export default Main;
