import React, { useEffect, useState } from 'react';
import { ART, PROFESSIONAL } from '../../assets/constants';
import ProjectInfo from '../../components/projectInfo';
import { IParsedImageMap } from '../../interfaces/IParsedImageMap';
import ImageScroll from '../../components/imageScroll';

interface IWorkObj {
	key: string;
	name: string;
	year: string;
	link?: string | undefined;
	description: string[];
}

const ProjectPage = (props: { root: string, allImages: IParsedImageMap[] }): JSX.Element => {
	const { allImages, root } = props;

	const [work, setWork] = useState<IWorkObj>();
	const [parsedImages, setParsedImages] = useState<any[]>();

	const pathName = window.location.pathname;

	const getProjects = () => {
		return pathName.includes('art') ? ART : PROFESSIONAL;
	};

	const extractInfo = async (projectData: { [name: string]: { key: string; name: string; year: string; link?: string | undefined; description: string[]; }; }) => {
		for (const key in projectData) {
			if (pathName.includes(key)) return await (projectData[key]);
		}
	};

	const getImages = (allImages: IParsedImageMap[], worksList: IWorkObj) => {
		const projectList = allImages.map(images => images[root]).filter(x => !!x);

		projectList.forEach((project: { [p: string]: { id: number, url: string }[] }) => {
			for (const key in project) {
				const projectObj = project[key];
				const parsedProject: string = Object.keys(projectObj)[0];
				// @ts-ignore
				if (parsedProject === worksList.key && project[key][parsedProject] !== undefined) {
					// @ts-ignore
					setParsedImages(project[key][parsedProject]);
				}
			}
		});
	};

	useEffect(() => {
		const projectData = getProjects();
		extractInfo(projectData).then(worksList => {
			setWork(worksList);
			getImages(allImages, worksList!);
		});
	});

	return (
		<>
			<div className='project-page-container'>
				<ProjectInfo details={work} />
				<ImageScroll imageList={parsedImages} />
			</div>
		</>
	);
};

export default ProjectPage;
