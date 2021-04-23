import React, { useEffect, useState } from 'react';
import MastHead from '../../components/mastHead';
import WorksList from '../../components/worksList';
import { ART, IMAGE_ROOTS, PROFESSIONAL } from '../../assets/constants';

const Works = (props: { expandedDefaultState: boolean, worksRootIndex: string }): JSX.Element => {
	const { expandedDefaultState, worksRootIndex } = props;

	const [worksList, setWorksList] = useState({});

	const handleWorksListSelection = () => {
		switch (worksRootIndex) {
			case IMAGE_ROOTS.art:
				setWorksList(ART);
				break;
			case IMAGE_ROOTS.professional:
				setWorksList(PROFESSIONAL);
				break;
		}
	};

	useEffect(() => {
		handleWorksListSelection();
	});

	return (
		<>
			<div className='masthead'>
				<MastHead expandedDefaultState={expandedDefaultState} />
			</div>
			<div className='works-container'>
				<p>works</p>
				<p>{worksRootIndex}</p>
				<WorksList worksList={worksList} worksRootIndex={worksRootIndex} />
			</div>
		</>
	);
};

export default Works;
