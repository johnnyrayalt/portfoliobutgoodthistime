import React, { FC } from 'react';
import { IMAGE_SIZE_DEFAULTS } from '../../assets/constants';
import { IImageList } from '../../interfaces/IImageList';
import { StringObj } from '../../types/StringObj';
import './styles.css';

type Props = {
	imageList: IImageList[],
	defaultSize: string
}

const ImageScroll: FC<Props> = (Props): JSX.Element => {
	const { imageList, defaultSize } = Props;

	const mapImages = (): JSX.Element[] => {
		return imageList.map((image: IImageList): JSX.Element => {
			const sizes: string[] = IMAGE_SIZE_DEFAULTS;
			const returnObj: StringObj = {};
			let returnString: string = '';

			for (let size of sizes) {
				returnObj[size] = image.url.replace(defaultSize, size);
				returnString += ` ${returnObj[size]} ${size}w,`;
			}

			return (
				<li key={image.id}>
					<img
						className='image'
						srcSet={returnString.trimLeft().slice(0, -1)}
						alt={''} />
				</li>
			);
		});
	};

	return (
		<div className='image-scroll-container'>
			<ul>
				{mapImages()}
			</ul>
		</div>
	);
};

export default ImageScroll;