import React from 'react';
import uuidv1 from 'uuid';
import { IProjectGridProps } from '../interfaces/IProjectGridProps';
import './ProjectGridStyles.scss';
import ProjectTile from './ProjectTile';

const ProjectGrid = (props: IProjectGridProps): JSX.Element => {
	return (
		<div className="project-grid-container">
			{props.projects.map(project => (
				<div key={uuidv1()} className="project-grid-item">
					<ProjectTile {...project} />
				</div>
			))}
		</div>
	);
};

export default ProjectGrid;
