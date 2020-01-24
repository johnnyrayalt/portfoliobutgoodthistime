import React from 'react';
import { IProjectGridProps } from '../interfaces/IProjectGridProps';
import './ProjectGridStyles.scss';
import ProjectTile from './ProjectTile';

const ProjectGrid = (props: IProjectGridProps): JSX.Element => {
	return (
		<div className="project-grid-container">
			<>
				{props.projects.map(project => (
					<div className="project-grid-item">
						<ProjectTile name={project.name} link={project.link} image={project.image} />
					</div>
				))}
			</>
		</div>
	);
};

export default ProjectGrid;
