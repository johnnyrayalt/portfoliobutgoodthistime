import ProjectGrid from 'components/ProjectGrid';
import { IProject } from 'interfaces/IProject';
import { IProjectGrid } from 'interfaces/IProjectGrid';
import React from 'react';
import { ParseImageTypes } from 'utils/ParseImageTypes';

const Projects = (props: IProject): JSX.Element => {
	const projectGrid: IProjectGrid = ParseImageTypes.parseProject(
		ParseImageTypes.parseRootType(props.imagesList, props.type),
	);

	return (
		<div>
			<ProjectGrid {...projectGrid} />
		</div>
	);
};

export default Projects;
