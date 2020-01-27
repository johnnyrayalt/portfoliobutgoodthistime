import React from 'react';
import { IProjectTile } from '../interfaces/IProjectTile';
import './ProjectTileStyles.scss';

const ProjectTile = (props: IProjectTile): JSX.Element => {
	return (
		<div className="project-tile-container">
			<p>{props.name}</p>
			<p>{props.link}</p>
			<p>{props.image}</p>
		</div>
	);
};

export default ProjectTile;
