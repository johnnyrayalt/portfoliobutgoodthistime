import React from 'react';
import MastHead from '../../components/mastHead';
import { IExpandedDefaultState } from '../../interfaces/IExpandedDefaultState';

const About = (props: IExpandedDefaultState): JSX.Element => {
	const { expandedDefaultState } = props;

	return (
		<>
			<div className='masthead'>
				<MastHead expandedDefaultState={expandedDefaultState} />
			</div>
			<div className='about-text-container'>
				<div className='text'>
					<span className='unicode'>&#x261E;</span> b. 1991 Los Angeles, California
				</div>
				<div className='text'>
					<span className='unicode'>&#x263B;</span> Currently lives and works in Portland, Oregon
				</div>
				<div className='text'>
					<span className='unicode'>&#x2668;</span> Software Engineer && Artist
				</div>
			</div>
		</>
	);
};

export default About;