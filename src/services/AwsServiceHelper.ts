import { IMAGE_ROOTS } from '../assets/constants';

export class AwsServiceHelper {
	public static getImageId = (image: AWS.S3.Object): number => {
		return parseInt(image.Key!.replace(/([^\d]+)/g, ''));
	};

	public static getImageRoot = (image: AWS.S3.Object): string => {
		return image.Key!.includes(IMAGE_ROOTS.art) ? 'art' : 'professional';
	};

	public static getImageKey = (image: AWS.S3.Object): string => {
		return image.Key!.split('/')[1];
	};
}
