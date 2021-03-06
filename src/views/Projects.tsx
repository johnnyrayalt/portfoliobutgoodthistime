import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import { IProject } from '../interfaces/IProject';
import { IProjectGrid } from '../interfaces/IProjectGrid';
import { ParseImageTypes } from '../utils/ParseImageTypes';

const Projects = (props: IProject): JSX.Element => {
	const projectGrid: IProjectGrid = ParseImageTypes.parseProjectsForGrid(
		ParseImageTypes.parseRootType(props.imagesList, props.type),
		props.type,
	);

	return (
		<div>
			<ProjectGrid {...projectGrid} />
		</div>
	);
};

export default Projects;
