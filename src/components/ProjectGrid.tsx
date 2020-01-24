import React from 'react';
import ProjectTile from './ProjectTile';
import './ProjectGridStyles.scss';

export interface IProjectGridProps {
	type: 'web' | 'art';
	projects: {
		name: string;
		link: string;
		image: string;
	}[];
}

class ProjectGrid extends React.Component<IProjectGridProps, {}> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="project-grid-container">
				<>
					{this.props.projects.map(project => (
						<div className="project-grid-item">
							<ProjectTile name={project.name} link={project.link} image={project.image} />
						</div>
					))}
				</>
			</div>
		);
	}
}

export default ProjectGrid;
