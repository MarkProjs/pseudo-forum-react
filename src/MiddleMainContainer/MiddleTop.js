const MiddleTop = () => {
    return ( 
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
 
export default MiddleTop;