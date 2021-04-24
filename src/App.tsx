import React, { useEffect, useState } from 'react';
import './App.css';
import { IMAGE_ROOTS } from './assets/constants';
import { creds } from './awsConfig';
import { IImageMap } from './interfaces/IImageMap';
import { IParsedImageMap } from './interfaces/IParsedImageMap';
import { AwsService } from './services/AwsService';
import { ImageUtils } from './utils/ImageUtils';
import Views from './views/Views';
import MastHead from './components/mastHead';

const App = (): JSX.Element => {

	const [parsedImageMaps, setParsedImageMaps] = useState<IParsedImageMap[]>([]);

	const initAws = (): AwsService => {
		const aws: AwsService = new AwsService(creds);
		aws.init();
		return aws;
	};

	const getImages = async (awsService: AwsService): Promise<IImageMap[]> => {
		return await awsService.getImageUrlMaps();
	};

	const parseImages = (imageMaps: IImageMap[]): IParsedImageMap[] => {
		return ImageUtils.sortIntoGroup(imageMaps, [IMAGE_ROOTS.art, IMAGE_ROOTS.professional]);
	};

	useEffect(() => {
		const getData = async (): Promise<void> => {
			const aws: AwsService = initAws();
			const imageMaps = await getImages(aws).then((res: IImageMap[]): IImageMap[] => res);
			setParsedImageMaps(parseImages(imageMaps));
		};

		getData();
	}, []);

	return (
		<div className='App'>
			<MastHead expandedDefaultState={false} />
			<div className='body-container'>
				<Views images={parsedImageMaps} />
			</div>
		</div>
	);
};

export default App;
