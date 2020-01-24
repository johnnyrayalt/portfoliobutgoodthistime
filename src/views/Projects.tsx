import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import { IProjectGridProps } from '../interfaces/IProjectGridProps';
import { IProjectStateAndProps } from '../interfaces/IProjectStateAndProps';

const webProjects: IProjectGridProps = {
	type: 'web',
	projects: [
		{ name: 'Lendjet.com', link: 'https://lendjet.com/', image: 'n/a' },
		{ name: 'Loanup.com', link: 'https://loanup.com/', image: 'n/a' },
	],
};

const artProjects: IProjectGridProps = {
	type: 'art',
	projects: [
		{ name: 'art 1', link: 'to art 1', image: 'n/a' },
		{ name: 'art 2', link: 'to art 2', image: 'n/a' },
	],
};

class Projects extends React.Component<IProjectStateAndProps, IProjectStateAndProps> {
	constructor(props: any) {
		super(props);
		this.state = {
			type: this.props.type,
		};
	}

	render() {
		let projects: IProjectGridProps;

		if (this.state.type === 'web') {
			projects = webProjects;
		} else {
			projects = artProjects;
		}

		return (
			<div>
				<ProjectGrid {...projects} />
			</div>
		);
	}
}

export default Projects;
