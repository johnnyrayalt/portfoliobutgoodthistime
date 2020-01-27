import { IProjectTileProps } from 'interfaces/IProjectTileProps';
import React from 'react';
import './ProjectTileStyles.scss';

const ProjectTile = (props: IProjectTileProps) => {
	return (
		<div className="project-tile-container">
			<p>{props.name}</p>
			<p>{props.link}</p>
			<p>{props.image}</p>
		</div>
	);
};

export default ProjectTile;
