import { IImageUrlMapping } from 'interfaces/IImageUrlMapping';
import { IProject } from 'interfaces/IProject';
import { IProjectGrid } from 'interfaces/IProjectGrid';
import { Group } from 'types/GroupType';

export class ParseImageTypes {
	public static parseRootType = (images: IImageUrlMapping[], type: Group): IProject => {
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
	public static parseProject = (props: IProject): IProjectGrid => {
		const getImagePreviewItems: IImageUrlMapping[] = [];

		props.imagesList.forEach((image: IImageUrlMapping): void => {
			if (image.id.includes('/1.jpg')) {
				getImagePreviewItems.push(image);
			}
		});

		const value: IProjectGrid = {
			type: 'art',
			projectsList: getImagePreviewItems.map(image => {
				return { name: image.id, link: image.url, image: image.url };
			}),
		};

		return value;
	};
}
