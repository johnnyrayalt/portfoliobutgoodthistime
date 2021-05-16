import React, { FC } from 'react';
import { IWorkObj } from '../../interfaces/IWorkObj';
import './styles.css';

type Props = {
	details: IWorkObj
}

const ProjectInfo: FC<Props> = (Props): JSX.Element => {
	const { details } = Props;

	const mapDetails = (): (JSX.Element | JSX.Element[])[] => {
		const arr: (JSX.Element | JSX.Element[])[] = [];

		for (const key in details) {
			if (details.hasOwnProperty(key)) {
				if (key !== 'description') {
					arr.push((
						<li key={key} className='project-details-li-item'>
							<span className='text'>
								{`${key}: ${details[key]}`}
							</span>
						</li>
					));
				} else {
					const descriptionArray: JSX.Element[] = [];

					details[key].forEach((desc: string): void => {
						descriptionArray.push((
							<li key={desc} className='project-details-li-item'>
								<span className='text'>
									{`${key}: ${desc}`}
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
			<span className='text brackets'>{'{'}</span>
			<ul>
				{mapDetails()}
			</ul>
			<span className='text brackets'>{'}'}</span>
		</div>
	);
};

export default ProjectInfo;
