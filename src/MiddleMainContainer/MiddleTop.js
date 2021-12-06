import React from "react";

const MiddleTop = (props) => {
	let forumData = props.forumData;
	console.log(forumData);
	let dropdown_row = document.getElementsByClassName("dropdown-row");
	// add options to Base Currency
	function addBaseOptions(options) {
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

		Object.keys(options).forEach((key) => {
			let childNode = document.createElement('option');
			childNode.setAttribute("value", `${options[key].name}`);
			childNode.innerText = `${options[key].name}`;
			category.appendChild(childNode);
		});
		category.addEventListener('click', ()=>{
			addToOptions(options);
		});
	}
	// add options to To topics
	function addToOptions(options) {
		let oldtopic = document.getElementById("topic");
		if (oldtopic) {
			oldtopic.remove();
		}
		let categoryValue = document.getElementById("category").value;
		let tempCat = null;
		let objTopic = options.find((cat) => {
			if (cat.name === categoryValue) {
				tempCat = cat;
			}
			return tempCat;
		});
	
		let topic = document.createElement("select");
		topic.id = "topic";
		dropdown_row[1].appendChild(topic);
		let selectoption = document.createElement('option');
		selectoption.innerText = "Select a topic";
		objTopic.topicList.forEach((tpc) => {
			let optionTopic = document.createElement('option');
			console.log(tpc);
			optionTopic.setAttribute("value", `${tpc.topic_title}`);
			optionTopic.innerText = `${tpc.topic_title}`;
			topic.appendChild(optionTopic);
		});
	}
	
	return (
		<section id="middle-top">

			<section class="dropdown-row">
				<label htmlFor="category">Categories</label>
				<select name="category" id="category" onMouseEnter={() => {
					addBaseOptions(forumData);
				}}>
					<option value="">Select a category</option>

				</select>
			</section>
			<section class="dropdown-row">
				<label htmlFor="topic">Related Topics</label>
				<select name="topic" id="topic">
					<option value="">Select a topic</option>

				</select>
			</section>

		</section>
	);
}

export default MiddleTop;