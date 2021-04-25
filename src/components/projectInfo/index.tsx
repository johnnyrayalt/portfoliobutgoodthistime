import React from 'react';
import './styles.css';

const ProjectInfo = (props: { details: any }): JSX.Element => {
	const { details } = props;

	const mapDetails = (): JSX.Element[] => {
		const arr: any[] = [];

		for (const detail in details) {
			if (details.hasOwnProperty(detail)) {
				if (detail !== 'description') {
					arr.push((
						<li key={detail} className='project-details-li-item'>
							<span className='text'>
								{`${detail}: ${details[detail]}`}
							</span>
						</li>
					));
				} else {
					const descriptionArray: JSX.Element[] = [];

					details[detail].forEach((desc: string) => {
						descriptionArray.push((
							<li key={desc} className='project-details-li-item'>
								<span className='text'>
									{`${detail}: ${desc}`}
								</span>
							</li>
						));
					});

					arr.push(descriptionArray);
				}
			}
		}
		return arr;
	};

	return (
		<div className='project-details-container'>
			<span className='text'>{'{'}</span>
			<ul>
				{mapDetails()}
			</ul>
			<span className='text'>{'}'}</span>
		</div>
	);
};

export default ProjectInfo;
