import React from 'react';
import uuidv1 from 'uuid';
import { IProjectGrid } from '../interfaces/IProjectGrid';
import { IProjectTile } from '../interfaces/IProjectTile';
import './ProjectGridStyles.scss';
import ProjectTile from './ProjectTile';

const ProjectGrid = (props: IProjectGrid): JSX.Element => {
	return (
		<div className="project-grid-container">
			{props.projectsList.map(
				(project: IProjectTile): JSX.Element => (
					<div key={uuidv1()} className="project-grid-item">
						<ProjectTile {...project} type={props.type} />
					</div>
				),
			)}
		</div>
	);
};

export default ProjectGrid;
