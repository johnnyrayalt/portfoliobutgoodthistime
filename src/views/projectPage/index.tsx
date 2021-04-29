import React, { useEffect, useState } from 'react';
import ProjectInfo from '../../components/projectInfo';
import ImageScroll from '../../components/imageScroll';
import ImagesApi from '../../services/ImagesApi';
import { ART, IMAGE_KV, PROFESSIONAL } from '../../assets/constants';

interface IWorkObj {
	key: string;
	name: string;
	year: string;
	link?: string | undefined;
	description: string[];
}

const ProjectPage = (props: { root: string }): JSX.Element => {
	const { root } = props;

	const [work, setWork] = useState<IWorkObj>();
	const [images, setImages] = useState<{id: number, url: string}[]>();

	const workKey = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

	const fetchImages = async () => {
		return await ImagesApi.get(root, workKey);
	};

	const extractInfo = () => {
		return (root === 'art') ? ART[workKey] : PROFESSIONAL[workKey];
	}

	useEffect(() => {
		fetchImages().then(res => {
			const key: string = IMAGE_KV[root][workKey];
			setImages(res[key]);
		});
		setWork(extractInfo())
	}, [])

	return (
		<>
			<div className='project-page-container'>
				<ProjectInfo details={work} />
				<ImageScroll imageList={images} />
			</div>
		</>
	);
};

export default ProjectPage;

// const images = ImagesApi.get(root, )
// const [parsedImages, setParsedImages] = useState<any[]>();
//
//
// const getProjects = () => {
// 	return pathName.includes('art') ? ART : PROFESSIONAL;
// };
//

//
// const getImages = (allImages: IParsedImageMap[], worksList: IWorkObj) => {
// 	const projectList = allImages.map(images => images[root]).filter(x => !!x);
//
// 	projectList.forEach((project: { [p: string]: { id: number, url: string }[] }) => {
// 		for (const key in project) {
// 			const projectObj = project[key];
// 			const parsedProject: string = Object.keys(projectObj)[0];
// 			// @ts-ignore
// 			if (parsedProject === worksList.key && project[key][parsedProject] !== undefined) {
// 				// @ts-ignore
// 				setParsedImages(project[key][parsedProject]);
// 			}
// 		}
// 	});
// };
//
// useEffect(() => {
// 	const projectData = getProjects();
// 	extractInfo(projectData).then(worksList => {
// 		setWork(worksList);
// 		getImages(allImages, worksList!);
// 	});
// });