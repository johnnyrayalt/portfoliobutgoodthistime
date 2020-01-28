import React from 'react';
import { Constants } from '../assets/Constants';
import { IProjectTile } from '../interfaces/IProjectTile';
import './ProjectTileStyles.scss';
import { Link } from 'react-router-dom';

const ProjectTile = (props: IProjectTile): JSX.Element => {
	let projectDetails: { [name: string]: string };

	const backgroundImage = {
		backgroundImage: `url(${props.image})`,
	};

	((name: string): { [name: string]: string } => {
		const regex: RegExp = /\b([^/]*\/)/gi;
		const names: RegExpMatchArray | null = name.match(regex);

		if (names === null) {
			throw new Error(
				`String does not meet regex requirements: ${name}.
                Please format as such: root/projectFolder/index.ext`,
			);
		}

		const key: string | undefined = names.pop()?.slice(0, -1);

		if (!key) {
			throw new Error(`Name formatter returned undefined for name: ${name}`);
		} else {
			projectDetails = Constants.projects.art[key];
			return projectDetails;
		}
	})(props.name);

	return (
		<div className="project-tile-container">
			<div className="project-tile-image" />
			<div className="project-tile-text-container">
				<Link to={`/projects/${projectDetails.root}/${projectDetails.key}`}>
					<p className="project-tile-text">{projectDetails.name}</p>
					<div className="project-tile-text">{projectDetails.year}</div>
				</Link>
			</div>
		</div>
	);
};

export default ProjectTile;
