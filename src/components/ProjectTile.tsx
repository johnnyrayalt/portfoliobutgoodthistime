import React from 'react';
import { IProjectTileProps } from '../interfaces/IProjectTileProps';
import './ProjectTileStyles.scss';

const ProjectTile = (props: IProjectTileProps): JSX.Element => {
	return (
		<div className="project-tile-container">
			<p>{props.name}</p>
			<p>{props.link}</p>
			<p>{props.image}</p>
		</div>
	);
};

export default ProjectTile;
