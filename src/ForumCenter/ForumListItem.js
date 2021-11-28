import React from 'react';


const FromListItem = (props) => {
    let forumList = props.forumList;
    let handleForumdelete = props.handleForumdelete;
    let handleForumLike = props.handleForumLike;
    let dislike = props.dislike
    return (
        <section id="forum-list">
            {forumList.map((frm) => (
                <section className="list-single-item" key={frm.id}>
                    <section className="item-row-info">
                        <label htmlFor="">add icons {frm.id}</label>
                        <input type="text" value={frm["text"]} />
                        <img src="./like-button.png" id="like" />
                        <img src="./dislike-icon-5.png" id="dislike" />
                    </section>
                   
                    <section className="item-row-info">
                        <label htmlFor="">by: {frm["author"]}</label>
                        <label htmlFor="">{frm["date"]}</label>
                        <label htmlFor="">Likes: {frm["likes"]}</label>
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