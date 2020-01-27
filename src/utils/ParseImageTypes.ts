import { Group } from './../types/GroupType';
import { IImageUrlMapping } from '../interfaces/IImageUrlMapping';
import { IProjectGrid } from 'views/Projects';

export class ParseImageTypes {
	public static parseRootType = (images: IImageUrlMapping[], type: Group) => {
		const parsedImages: IImageUrlMapping[] = [];
		const parse = (images: IImageUrlMapping[], letter: string) => {
			images.forEach(image => {
				if (image.id.charAt(0) === `${letter}`) {
					parsedImages.push(image);
				}
			});
		};

		switch (type) {
			case 'art': {
				parse(images, 'a');
				break;
			}
			case 'web': {
				parse(images, 'w');
				break;
			}
		}
		const result = {
			type: type,
			imagesList: parsedImages,
		};

		return result;
	};

	// this needs to group by project and then sort
	public static parseProject = (props: any) => {
		const getImagePreviewItems: IImageUrlMapping[] = [];

		props.imagesList.forEach((image: any) => {
			if (image.id.includes('/1.jpg')) {
				getImagePreviewItems.push(image);
			}
		});

		const transform = getImagePreviewItems.map(image => {
			return { name: image.id, link: image.url, image: image.url };
		});

		const value: IProjectGrid = {
			type: 'art',
			projectsList: transform,
		};

		return value;
	};
}
