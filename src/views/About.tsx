import React from 'react';
import './AboutStyles.scss';

const About = () => {
	return (
		<div className="about-text-container">
			<div className="text">
				<span className="unicode">&#x261E;</span> b. 1991 Los Angeles, California
			</div>
			<div className="text">
				<span className="unicode">&#x263B;</span> Currently lives and works in Portland, Oregon
			</div>
			<div className="text">
				<span className="unicode">&#x2668;</span> Software Engineer
			</div>
		</div>
	);
};

export default About;
