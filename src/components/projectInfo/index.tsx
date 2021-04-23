import React from 'react';

const ProjectInfo = (props: { details: any }): JSX.Element => {
	const { details } = props;

	const mapDetails = (): JSX.Element[] => {
		const arr: any[] = [];

		for (const detail in details) {
			if (details.hasOwnProperty(detail)) {
				if (detail !== 'description') {
					arr.push((
						<li key={detail} className='project-details-li-item'>
							{`${detail}: ${details[detail]}`}
						</li>
					));
				} else {
					const descriptionArray: JSX.Element[] = [];

					details[detail].forEach((desc: string) => {
						descriptionArray.push((
							<li key={desc} className='project-details-li-item'>
								{`${detail}: ${desc}`}
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
			<ul>
				{mapDetails()}
			</ul>
		</div>
	);
};

export default ProjectInfo;
