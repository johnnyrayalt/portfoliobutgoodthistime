import React from 'react';
import MastHead from '../../components/mastHead';
import { IExpandedDefaultState } from '../../interfaces/IExpandedDefaultState';

const Home = (props: IExpandedDefaultState): JSX.Element => {
	const { expandedDefaultState } = props;

	return (
		<>
			<div className='masthead'>
				<MastHead expandedDefaultState={expandedDefaultState} />
			</div>
			<div className='home-container'>
				<p>HOME</p>
			</div>
		</>
	);
};

export default Home;
