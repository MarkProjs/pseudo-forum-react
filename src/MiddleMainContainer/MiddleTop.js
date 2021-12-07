import React, { useEffect, useState } from 'react';


const MiddleTop = (props) => {
	let forumData = props.forumData;
	let dropdown_row = document.getElementsByClassName("dropdown-row");
	let [post, setPost] = useState(null);

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

	function createMiddlecPost(newPost) {
		let forumlist = document.getElementById("forum-list");
		
		
		// let middle_container = document.getElementById("middle-container");
		// let newForumlist = document.createElement("section");
		// newForumlist.id = "forum-list";
		// middle_container.appendChild(newForumlist);
		// console.log(newForumlist);
		newPost.map((frm, index) => {
	
			let sectionList = document.createElement('section');
			sectionList.className = "list-single-item";
			forumlist.appendChild(sectionList);
			let item1 = document.createElement("section");
			item1.className = "item-row-info";
			let item2 = document.createElement("section");
			item2.className = "item-row-info";
			sectionList.appendChild(item1);
			sectionList.appendChild(item2);
			//first part
			let label1 = document.createElement("label");
			label1.innerText = `add icons ${frm.id}`;
			let input1 = document.createElement("input");
			input1.type = "text";
			input1.value = `${frm.text}`;
			let likeimg = document.createElement("img");
			likeimg.src = "./like-button.png";
			likeimg.id = "like";
			likeimg.alt = "like";
			likeimg.addEventListener('click', ()=>{
				handleForumLike(frm,index);
			})
			let disLike = document.createElement("img");
			disLike.src = "./dislike-icon-5.png";
			disLike.id = "dislike";
			disLike.alt = "disLike";
			disLike.addEventListener('click', ()=>{
				handleForumdislike(frm, index);
			})
			item1.appendChild(label1);
			item1.appendChild(input1);
			item1.appendChild(likeimg);
			item1.appendChild(disLike);

			let label2 = document.createElement("label");
			label2.innerText = `by: ${frm.author}`;
			let labelDate = document.createElement("label");
			labelDate.innerText = `${frm.date}`;
			let labelLike = document.createElement("label");
			labelLike.className = "likesAndDislike";
			labelLike.innerText = `Likes: ${frm.likes}`
			let btn = document.createElement("button");
			btn.className = "forum-delete";
			btn.innerText = "delete";
			btn.addEventListener("click", ()=>{
				
			    handleForumdelete(frm);
			})
			item2.appendChild(label2);
			item2.appendChild(labelDate);
			item2.appendChild(labelLike);
			item2.appendChild(btn);

		});


	}
	
    function handleForumdelete(frm) {
        // console.log("delete forum", frm);
		// newPost.filter((frm)=>{
        //   return frm.id !== frmId;
		// })
        // setFroumData(forumData.filter((frm) => {
        //     return frm.id !== frmId;
        // }));
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
    
	function showPost(tpc) {
		let topic = document.getElementById("topic").value;
		let newPost = [];
		Object.keys(tpc).find(() => {
			if (tpc.topic_title === topic) {
				newPost = tpc.listPosts;
				return tpc.listPosts;
			}
		})
		
		createMiddlecPost(newPost);
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
				<select name="topic" id="topic" onClick={() => {
					// showPost(forumData);
				}}>
					<option value="">Select a topic</option>
				</select>
			</section>
		</section>
	);
}
export default MiddleTop;
