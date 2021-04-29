import React from 'react';
import Header from '../header';
import Navigation from '../navigation';
import './styles.css';

const MastHead = (): JSX.Element => {

	return (
		<div className='masthead'>
			<Header />
			<Navigation />
		</div>
	);
};

export default MastHead;
