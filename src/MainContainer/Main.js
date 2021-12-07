import LeftColumn from "../Left/LeftColumn";
import MainColum from "../MiddleMain/MainColumn";
import RightColumn from "../Right/RightColumn";
import React, { useEffect, useState } from "react";
//import FromListItem from "../ForumCenter/ForumListItem";


const Main = () => {
    let [forumData, setFroumData] = useState(null);
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
    // console.log(forumData[0].name);
    let [forumList, setFroumList] = useState([
        { "id": 1, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "nasr", "date": "2021-11-10 12:10", "text": "Are You Making These Coding using REactJS Mistakes?", "rate": 2.1, "likes": 0, "replies": 10 },
        { "id": 2, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "badr", "date": "2021-11-14 12:30", "text": "This is a post TWO topic- SuperEasy Ways To Learn And Use REactJS", "rate": 2.1, "likes": 0, "replies": 5 },
        { "id": 3, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "tricia", "date": "2021-10-16 12:30", "text": "This is a post 3- The Lazy Way To Coding using REactJS", "rate": 4.1, "likes": 22, "replies": 20 },
        { "id": 4, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "dan", "date": "2018-12-09 11:30", "text": "This is a post 4 - Coding using REactJS Expert Interview", "rate": 3.1, "likes": 10, "replies": 15 },
        { "id": 5, "topic_id": "cat1_topic1_post1", "parentId": "topic1", "author": "tricia", "date": "2021-05-11 12:30", "text": "This is a post 5-Brilliant Ways To Use Coding using REactJS", "rate": 4.1, "likes": 22, "replies": 20 }
    ]);

    function handleForumdelete(frmId) {
        console.log("delete forum", frmId);
        setFroumList(forumList.filter((frm) => {
            return frm.id !== frmId;
        }));
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
                forumList={forumList}
                handleForumdelete={handleForumdelete}
                handleForumLike={handleForumLike}
                handleForumdislike={handleForumdislike}

            />}
            <RightColumn
                forumList={forumList}
            />
        </section>
    );
}

export default Main;
