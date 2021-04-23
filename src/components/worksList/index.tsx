import React from 'react';
import { NavLink } from 'react-router-dom';

const WorksList = (props: { worksList: any, worksRootIndex: string }): JSX.Element => {

	const { worksList, worksRootIndex } = props;

	const handleSettingsWorksList = (): JSX.Element[] => {
		const worksListArray: JSX.Element[] = [];

		for (const project in worksList) {
			const component = (
				<li className='works-list-li' key={project}>
					<NavLink
						className='works-list-li-link link'
						to={`/works/${worksRootIndex}/${project}`}
					>
						{worksList[project].name}
					</NavLink>
				</li>
			);

			worksListArray.push(component);
		}

		return worksListArray;
	};

	return (
		<div className='works-list-container'>
			<ul className='works-list-ul'>
				{handleSettingsWorksList()}
			</ul>
		</div>
	);
};

export default WorksList;
