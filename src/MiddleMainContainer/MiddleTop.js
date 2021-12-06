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
		newPost.map((frm, index) => {
			let text = frm.text;
			let sectionList = document.createElement('section');
			sectionList.className="list-single-item";
			forumlist.appendChild(sectionList);
			let item1 = document.createElement("section");
			item1.className="item-row-info";
			let item2 = document.createElement("section");
			item2.className="item-row-info";
			sectionList.appendChild(item1);
			sectionList.appendChild(item2);
			console.log(frm);
		// 	forumlist.innerHTML =`
		// 	<section className="list-single-item" key={$frm.id}>
		// 		<section className="item-row-info">
		// 			<label htmlFor="">add icons ${frm.id}</label>
		// 			<input type="text" value="${text}"/>
		// 			<img src="./like-button.pngvggvfg" id="like" alt="like"/>
		// 			<img src="./dislike-icon-5.png" id="dislike" alt="dislike" />
		// 		</section>

		// 		<section className="item-row-info">
		// 			<label htmlFor="">by: ${frm["author"]}</label>
		// 			<label htmlFor="">${frm["date"]}</label>
		// 			<label className="likesAndDislike" htmlFor="">Likes: ${frm.likes}</label>
		// 			<button className="forum-delete">delete</button>
		// 		</section>
		// </section>`;
		});


	}
	let [test, setTest] = useState(null);
	useEffect(() => {
		setTest(test);
	}, [test])
	function showPost(tpc) {
		let topic = document.getElementById("topic").value;
		let newPost = [];
		Object.keys(tpc).find(() => {
			if (tpc.topic_title === topic) {
				newPost = tpc.listPosts;
				return tpc.listPosts;
			}
		})

		console.log(newPost, "I'm new post");
		createMiddlecPost(newPost);

		setTest(test => newPost);
		return newPost;
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
