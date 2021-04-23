import React from 'react';
import { IExpandedDefaultState } from '../../interfaces/IExpandedDefaultState';
import Header from '../header';
import Navigation from '../navigation';

const MastHead = (props: IExpandedDefaultState): JSX.Element => {
	const { expandedDefaultState } = props;

	return (
		<>
			<Header />
			<Navigation expandedDefaultState={expandedDefaultState} />
		</>
	);
};

export default MastHead;
