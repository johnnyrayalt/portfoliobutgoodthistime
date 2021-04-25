import React from 'react';
import WorksList from '../../components/worksList';
import { ART, IMAGE_ROOTS, PROFESSIONAL } from '../../assets/constants';
import './styles.css';

const Works = (props: { worksRootIndex: string }): JSX.Element => {
	const { worksRootIndex } = props;

	const handleWorksListSelection = () => {
		switch (worksRootIndex) {
			case IMAGE_ROOTS.art:
				return ART;
			case IMAGE_ROOTS.professional:
				return PROFESSIONAL;
		}

	};

	return (
		<div className='works-container'>
			<WorksList worksList={handleWorksListSelection()} worksRootIndex={worksRootIndex} />
		</div>
	);
};

export default Works;
