import React, { FC } from 'react';
import Header from '../header';
import Navigation from '../navigation';
import './styles.css';

const MastHead: FC = (): JSX.Element => {

	return (
		<div className='masthead'>
			<Header />
			<Navigation />
		</div>
	);
};

export default MastHead;
