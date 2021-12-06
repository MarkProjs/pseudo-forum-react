import React, { useEffect, useState } from 'react';


const MiddleTop = (props) => {
	let forumData = props.forumData;
	let dropdown_row = document.getElementsByClassName("dropdown-row");
	let [post, setPost]=useState(null);
	
	useEffect(() => {
		addBaseOptions(forumData);
	});


	function addBaseOptions(forumData) {
		let oldcategory = document.getElementById("category");
		if (oldcategory) {
			oldcategory.remove();
		}
		let category = document.createElement("select");
		category.id = "category";
		dropdown_row[0].appendChild(category);
		let selectoption = document.createElement('option');
		selectoption.innerText = "Select a category";
		category.appendChild(selectoption);
		forumData.map((elem) => {
			let childNode = document.createElement('option');
			childNode.setAttribute("value", `${elem.name}`);
			childNode.innerText = `${elem.name}`;
			category.appendChild(childNode);
		});
		category.addEventListener('click', () => {
			addToOptions(forumData);
		});
	}

	function addToOptions(forumData) {
		let oldtopic = document.getElementById("topic");
		if (oldtopic) {
			oldtopic.remove();
		}
		let categoryValue = document.getElementById("category").value;
		let options = forumData.find((elem) => {
			return elem.name === categoryValue;
		});

		let topic = document.createElement("select");
		topic.id = "topic";
		dropdown_row[1].appendChild(topic);
		let selectoption = document.createElement("option");
		selectoption.innerText = "Select a topic";
		topic.appendChild(selectoption);
		if (categoryValue === "Select a category") {
			//nothing to do
		} else {
			options["topicList"].map((tpc) => {
				let optionTopic = document.createElement('option');
				optionTopic.setAttribute("value", `${tpc.topic_title}`);
				optionTopic.innerText = `${tpc.topic_title}`;
				topic.appendChild(optionTopic);
				topic.addEventListener('click', () => {
					showPost(tpc);
				});
			});
		}
	}

function createMiddlecPost(newPost){
	
	// let forumlist = document.getElementById("forum-list");
	
    // Object.keys(newPost).map((elem)=>{
	// 	console.log(newPost[elem]);
	// 	let section = document.createElement("section");
	// 	forumlist.appendChild(section);
	// 	forumlist.innerHTML=`<section className="list-single-item" key=>
	// 				<section className="item-row-info">
    //                     <label htmlFor="">add icons ${newPost.topicList[0]} </label>
    //                     <input type="text" value={} />
    //                     <img src="./like-button.png" id="like" alt="like" onClick={() => {
                           

    //                     }} />
    //                     <img src="./dislike-icon-5.png" id="dislike"
    //                         onClick={() => {
                              
    //                         }} alt="dislike" />
    //                 </section>
	// 	</section>`;
	// })
}
function showPost(forumData) {
        let topic = document.getElementById("topic").value;
        let category = document.getElementById("category").value;
        let newPost = {};
            Object.keys(forumData).find((elem) => {
                if (forumData[elem].name === category) {
                    // console.log("yes",options[elem]);
                    newPost = forumData[elem];
                    return forumData[elem];
                }
            });

			console.log(newPost.topicList);
    //  let nesListPost = {};

            Object.keys(newPost).map(() => {
                let topicls = newPost["topicList"];
				// topicls.find((elem)=>{
				// 	console.log(topicls[elem], "now, I'm here");
				// })
				console.log(topicls[0], "I'm here");
            });

    setPost(newPost);
        //    console.log(newPost,"=========");
		//    let topicTag = document.getElementById("topic");
		//    topicTag.addEventListener('click', () => {
			createMiddlecPost(newPost)
		// });
		console.log(post);
    }

	return (
		<section id="middle-top">
			<section class="dropdown-row">
				<label htmlFor="category">Categories</label>
				<select name="category" id="category">
					<option value="">Select a category</option>
				</select>
			</section>
			<section class="dropdown-row">
				<label htmlFor="topic">Related Topics</label>
				<select name="topic" id="topic" onClick={()=>{
					// showPost(forumData);
				}}>
					<option value="">Select a topic</option>
				</select>
			</section>
		</section>
	);
}
export default MiddleTop;
