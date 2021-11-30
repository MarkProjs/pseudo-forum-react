import React from "react";

const MiddleTop = (props) => {
	let forumData = props.forumData;
	function addOptions(options) {
		console.log(options);
		let oldcategory = document.getElementById("category");
		if (oldcategory) {
			oldcategory.remove();
		}
		let dropdown_row = document.getElementsByClassName("dropdown-row");
		let category = document.createElement("select");
		category.id = "category";
		dropdown_row[0].appendChild(category);
		let selectoption = document.createElement('option');
		selectoption.innerText="Select a category";
		category.appendChild(selectoption);
		Object.keys(options).forEach((key) => {
			let childNode = document.createElement('option');
			childNode.innerText = `${options[key].name}`;
			category.appendChild(childNode);
		});
	}
	return (
		<section id="middle-top">

			<section class="dropdown-row">
				<label for="category">Base Currency</label>
				<select name="category" id="category" onMouseEnter={() => {
					addOptions(forumData);
				}}>
					<option value="">Select a category</option>

				</select>
			</section>
			<section class="dropdown-row">
				<label for="topic">To Currency</label>
				<select name="tipic" id="topic">
					<option value="">Select a topic</option>

				</select>
			</section>

		</section>
	);
}

export default MiddleTop;