import React from 'react';
import { Group } from 'types/GroupType';
import { IImageUrlMapping } from 'interfaces/IImageUrlMapping';
import { IProjectTileProps } from 'interfaces/IProjectTileProps';
import { ParseImageTypes } from 'utils/ParseImageTypes';
import ProjectGrid from 'components/ProjectGrid';

export interface IProject {
	type: Group;
	imagesList: IImageUrlMapping[];
}

export interface IProjectGrid {
	type: Group;
	projectsList: IProjectTileProps[];
}

class Projects extends React.Component<IProject> {
	render() {
		const projects = ParseImageTypes.parseRootType(this.props.imagesList, this.props.type);
		const projectGrid = ParseImageTypes.parseProject(projects);
		return (
			<div>
				<ProjectGrid {...projectGrid} />
			</div>
		);
	}
}

export default Projects;
