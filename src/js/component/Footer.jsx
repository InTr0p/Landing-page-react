import propTypes from "prop-types";
import React from "react";
const Footer = (props) => {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<p className="text-center">{props.description}</p>
		</footer>
	);
};

Footer.prototypes = {
	description: propTypes.string,
};

export default Footer;
