import React from 'react';
import './ProjectTileStyles.scss';

export interface IProjectTileProps {
	name: string;
	link: string;
	image: string;
}

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
