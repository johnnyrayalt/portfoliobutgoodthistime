import React from 'react';
import uuidv1 from 'uuid';
import { IProjectGrid } from '../interfaces/IProjectGrid';
import { IProjectTileProps } from '../interfaces/IProjectTileProps';
import './ProjectGridStyles.scss';
import ProjectTile from './ProjectTile';

const ProjectGrid = (props: IProjectGrid): JSX.Element => {
	return (
		<div className="project-grid-container">
			{props.projectsList.map(
				(project: IProjectTileProps): JSX.Element => (
					<div key={uuidv1()} className="project-grid-item">
						<ProjectTile {...project} />
					</div>
				),
			)}
		</div>
	);
};

export default ProjectGrid;
