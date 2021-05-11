import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ART, IMAGE_KV, IMAGE_ROOTS, PROFESSIONAL } from '../../assets/constants';
import ImageScroll from '../../components/imageScroll';
import ProjectInfo from '../../components/projectInfo';
import { IImageList } from '../../interfaces/IImageList';
import { IParsedImageList } from '../../interfaces/IParsedImageList';
import { IViewport } from '../../interfaces/IViewport';
import { IWorkObj } from '../../interfaces/IWorkObj';
import ImagesApi from '../../services/ImagesApi';
import { useViewport } from '../../utils/useViewportHook';

type Props = {
	root: string
}

const ProjectPage: FC<Props> = (Props): JSX.Element => {
	const { root } = Props;
	const { width }: IViewport = useViewport();
	const param = useParams<{ id: string }>();
	const workKey = param.id;

	const [work, setWork] = useState<IWorkObj>({} as IWorkObj);
	const [images, setImages] = useState<IImageList[] | []>([]);
	const [defaultSize, setDefaultSize] = useState<string>('');

	const fetchImages = (defaultSize: string): Promise<IParsedImageList> => {
		return ImagesApi.get(root, workKey, defaultSize);
	};

	const extractInfo = (): IWorkObj => {
		let works: IWorkObj = {} as IWorkObj;

		switch (root) {
			case IMAGE_ROOTS.art:
				works = ART[workKey];
				break;
			case IMAGE_ROOTS.professional:
				works = PROFESSIONAL[workKey];
				break;
		}

		if (!works) {
			throw new Error(`No info found for ${root}! How'd that happen?`);
		}

		return works;
	};

	useEffect(() => {
		const setDefaultImageWidth: string =
			(width > 500 && width <= 750) ? '750'
				: (width >= 864) ? '864'
				: '500';

		setDefaultSize(setDefaultImageWidth);

		fetchImages(setDefaultImageWidth).then((res: IParsedImageList) => {
			const key: string = IMAGE_KV[root][workKey];
			setImages(res[key]);
		});

		setWork(extractInfo());
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div className='project-page-container'>
				<ProjectInfo details={work} />
				<ImageScroll imageList={images} defaultSize={defaultSize} />
			</div>
		</>
	);
};

export default ProjectPage;
