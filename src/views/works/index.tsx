import React, { useEffect, useState } from 'react';
import WorksList from '../../components/worksList';
import { ART, IMAGE_ROOTS, PROFESSIONAL } from '../../assets/constants';
import './styles.css';

const Works = (props: { worksRootIndex: string }): JSX.Element => {
	const { worksRootIndex } = props;

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
		<div className='works-container'>
			<WorksList worksList={worksList} worksRootIndex={worksRootIndex} />
		</div>
	);
};

export default Works;
