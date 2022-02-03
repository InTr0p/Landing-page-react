import PropTypes from "prop-types";
import React from "react";
const Jumbotron = (props) => {
	return (
		<div className="Jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<hr class="my-4" />
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.descriptionButton}
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	descriptionButton: PropTypes.string,
};

export default Jumbotron;
