import React from 'react';
import { IProjectTile } from '../interfaces/IProjectTile';
import './ProjectTileStyles.scss';

const ProjectTile = (props: IProjectTile): JSX.Element => {
	const backgroundImage = {
		backgroundImage: `url(${props.image})`,
	};

	// const onHover = () =>
	return (
		<div className="project-tile-container">
			<div style={backgroundImage} className="project-tile-image" />
			<div className="project-tile-text-container">
				<p className="project-tile-text">{props.name}</p>
			</div>
		</div>
	);
};

export default ProjectTile;
