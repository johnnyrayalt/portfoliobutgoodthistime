import 'components/ProjectGridStyles.scss';
import ProjectTile from 'components/ProjectTile';
import React from 'react';
import uuidv1 from 'uuid';
import { IProjectGrid } from 'views/Projects';
import { IProjectTileProps } from 'interfaces/IProjectTileProps';

const ProjectGrid = (props: IProjectGrid): JSX.Element => {
	return (
		<div className="project-grid-container">
			{props.projectsList.map((project: IProjectTileProps) => (
				<div key={uuidv1()} className="project-grid-item">
					<ProjectTile {...project} />
				</div>
			))}
		</div>
	);
};

export default ProjectGrid;
