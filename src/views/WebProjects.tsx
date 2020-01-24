import React from 'react';
import ProjectGrid, { IProjectGridProps } from '../components/ProjectGrid';

const projects: IProjectGridProps = {
	type: 'web',
	projects: [
		{ name: 'LendJet.com', link: 'link string', image: 'n/a' },
		{ name: 'LendJet.com', link: 'link string', image: 'n/a' },
	],
};

const Projects = () => {
	return (
		<div>
			<ProjectGrid {...projects} />
		</div>
	);
};

export default Projects;
