import React from 'react';
import { IExpandedDefaultState } from '../../interfaces/IExpandedDefaultState';
import Header from '../header';
import Navigation from '../navigation';
import './styles.css';

const MastHead = (props: IExpandedDefaultState): JSX.Element => {
	const { expandedDefaultState } = props;

	return (
		<div className='masthead'>
			<Header />
			<Navigation />
		</div>
	);
};

export default MastHead;
