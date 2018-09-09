import React, { Component } from "react";

class O_mnie extends Component {
	
	componentDidMount() {
		this.props.toggleAnimations();
	}

	render() {
		return (
			<div id="o_mnie-section">
				<h2><span className="anim-fadein-heading">O mnie</span></h2>
				<div className="text-container">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo et vitae inventore suscipit eligendi, libero cupiditate atque nisi qui, perferendis id labore fugiat mollitia facere iste voluptate. Voluptatibus iure deleniti perferendis incidunt, repudiandae facilis eaque.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quod autem unde odio consectetur dolor et ducimus placeat necessitatibus tempore iusto, dignissimos enim, nostrum maxime. Enim, architecto! Exercitationem ut similique, ducimus, iure, obcaecati laboriosam placeat magni voluptate odit quos sequi. Suscipit blanditiis quibusdam fugit, aliquam officiis sequi assumenda, inventore, numquam provident laudantium eaque deserunt sint culpa quia dolore earum! Ducimus magni repellat inventore. Repellendus veniam, aliquam similique sit nihil rerum deleniti commodi, cupiditate libero! Nostrum commodi sapiente esse ab nam architecto, aliquam, est vitae, unde iure ipsam ut delectus blanditiis numquam voluptatibus minima. Nam recusandae quidem quisquam sit, et aperiam deleniti assumenda atque vel laborum consequuntur aliquid amet quae officia minus voluptatum, harum. Recusandae at maiores adipisci consequuntur optio libero vel, quibusdam fugit. Dignissimos quidem tempora quibusdam in maxime et modi maiores est rerum, expedita dolorum ut sit fuga dolor. Consequatur impedit deleniti aliquam voluptatem ex at autem, itaque culpa!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora fuga facere optio modi neque rem doloribus at, nihil quaerat expedita?
					</p>
				</div>
			</div>
		);
	}
}

export default O_mnie;