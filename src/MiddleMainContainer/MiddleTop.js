import React from "react";

const MiddleTop = () => {
	class Option extends React.Component{
		constructor(props){
			super(props)
		// this.componentDidCatch=this.componentDidCatch.bind(this)
		}
		// componentDidMount(){
		// 	fetch("../forum.json")
		// 	.then((resp)=>{resp.json})
		// 	.then((data)=>{
		// 		console.log(data);
		// 	})
		// }
		render(){
			return(
				<section id="middle-top">

            <section class="dropdown-row">
				<label for="category">Base Currency</label>
					<select name="category" id="category">
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
	}
    return ( 
        <Option> </Option>
	);
}
 
export default MiddleTop;