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
        // setFroumList(forumList.filter((frm) => {
        //     return frm.id !== frmId;
        // }));
    }

    function handleForumLike(frm, index) {
        let likeId = document.getElementsByClassName("likesAndDislike");
        frm.likes = frm.likes + 1;
        likeId[index].innerText = `Likes: ${frm.likes++}`;
        frm.likes = frm.likes - 1;
    }

    function handleForumdislike(frm, index) {
        let likeId = document.getElementsByClassName("likesAndDislike");
        frm.likes = frm.likes - 1;
        likeId[index].innerText = `Likes: ${frm.likes--}`;
        frm.likes = frm.likes + 1;
    }
    // function addOptions(options) {
    //     console.log(options);
    //     let selectList = document.getElementsByTagName('select');
    //     for (let i = 0; i < selectList.length; i++) {
    //         Object.keys(options).forEach((key) => {
    //             let childNode = document.createElement('option');
    //             childNode.innerText = `${options[key].name}`;
    //             selectList[i].appendChild(childNode);
    //         });
    //     }
    // }
    return (
        <section id="main-content">
            <LeftColumn />

            {forumData && <MainColum
                forumData={forumData}
                // forumList={forumList}
                handleForumdelete={handleForumdelete}
                handleForumLike={handleForumLike}
                handleForumdislike={handleForumdislike}

            />}


          {forumData && <RightColumn
                 forumData={forumData}
            />}
        </section>
    );
}

export default Main;
