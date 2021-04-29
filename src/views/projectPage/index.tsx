import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ART, IMAGE_KV, PROFESSIONAL } from '../../assets/constants';
import ImageScroll from '../../components/imageScroll';
import ProjectInfo from '../../components/projectInfo';
import { IWorkObj } from '../../interfaces/IWorkObj';
import ImagesApi from '../../services/ImagesApi';

const ProjectPage = (props: { root: string }): JSX.Element => {
	const { root } = props;

	const [work, setWork] = useState<IWorkObj>();
	const [images, setImages] = useState<{ id: number, url: string }[]>();

	const param = useParams<{id: string}>();
	const workKey = param.id;

	const fetchImages = async () => {
		return await ImagesApi.get(root, workKey);
	};

	const extractInfo = () => {
		return (root === 'art') ? ART[workKey] : PROFESSIONAL[workKey];
	};

	useEffect(() => {
		fetchImages().then(res => {
			const key: string = IMAGE_KV[root][workKey];
			setImages(res[key]);
		});
		setWork(extractInfo());
	}, []);

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
