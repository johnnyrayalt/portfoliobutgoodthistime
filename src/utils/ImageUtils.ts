// import { IMAGE_KV } from './../assets/constants';
// import { IImageMap } from '../interfaces/IImageMap';
// import { IParsedImageMap } from '../interfaces/IParsedImageMap';
//
// interface IUniqueKeys {
// 	root: string;
// 	key: string;
// }
//
// interface IMappedRoots {
// 	[name: string]: {};
// }
//
// interface IBaseImageMaps {
// 	[x: string]: { [name: string]: {} }[];
// }
//
// interface IIndividualImageMap {
// 	[name: string]: {};
// }
//
// export class ImageUtils {
// 	public static sortIntoGroup = (imageMaps: IImageMap[], roots: string[]): IParsedImageMap[] => {
// 		const mappedRoots: IMappedRoots[] = roots.map(
// 			(root: string): IMappedRoots => {
// 				return { [root]: {} };
// 			},
// 		);
//
// 		const uniqueKeys: IUniqueKeys[] = imageMaps
// 			.filter((image: IImageMap): boolean => image.id === 1)
// 			.map(
// 				(image: IImageMap): IUniqueKeys => {
// 					return {
// 						root: image.root,
// 						key: image.key,
// 					};
// 				},
// 			);
//
// 		const baseImageMaps: IBaseImageMaps[] = ImageUtils.zipper(mappedRoots, uniqueKeys);
// 		return ImageUtils.groupImageUrls(imageMaps, baseImageMaps) as [];
// 	};
//
// 	public static zipper = (roots: IMappedRoots[], keys: IUniqueKeys[]): IBaseImageMaps[] => {
// 		return roots.map(
// 			(root: IMappedRoots): IBaseImageMaps => {
// 				const rootKey: string = Object.keys(root)[0];
// 				const imageMaps: IIndividualImageMap[] = [];
//
// 				for (const key in keys) {
// 					if (keys[key].root === rootKey) {
// 						const keyObj: IIndividualImageMap = { [keys[key].key]: {} };
// 						imageMaps.push(keyObj);
// 					}
// 				}
//
// 				return { [rootKey]: imageMaps };
// 			},
// 		);
// 	};
//
// 	/**
// 	 * This seems like it can be broken up better
// 	 */
// 	public static groupImageUrls = (imageMaps: IImageMap[], baseImageMaps: IBaseImageMaps[]) => {
// 		// return baseImageMaps.map((root) => {
// 		// 	const rootKey: string = Object.keys(root)[0];
// 		// 	const parsedArr: { [x: string]: { id: number; url: string } }[] = [];
// 		//
// 		// 	for (const key in imageMaps) {
// 		// 		if (imageMaps[key].root === rootKey) {
// 		// 			[imageMaps[key].key].forEach((imageKey) => {
// 		// 				for (const IMG_KEY in IMAGE_KEYS) {
// 		// 					if (IMAGE_KEYS[IMG_KEY] === imageKey) {
// 		// 						parsedArr.push({
// 		// 							[IMG_KEY]: {
// 		// 								id: imageMaps[key].id,
// 		// 								url: imageMaps[key].url,
// 		// 							},
// 		// 						});
// 		// 					}
// 		// 				}
// 		// 			});
// 		// 		}
// 		// 	}
// 		//
// 		// 	const parsedImageMaps = ImageUtils.chunk(parsedArr, IMAGE_KEYS);
// 		// 	return { [rootKey]: parsedImageMaps };
// 		// });return baseImageMaps.map((root) => {
// 		// 	const rootKey: string = Object.keys(root)[0];
// 		// 	const parsedArr: { [x: string]: { id: number; url: string } }[] = [];
// 		//
// 		// 	for (const key in imageMaps) {
// 		// 		if (imageMaps[key].root === rootKey) {
// 		// 			[imageMaps[key].key].forEach((imageKey) => {
// 		// 				for (const IMG_KEY in IMAGE_KEYS) {
// 		// 					if (IMAGE_KEYS[IMG_KEY] === imageKey) {
// 		// 						parsedArr.push({
// 		// 							[IMG_KEY]: {
// 		// 								id: imageMaps[key].id,
// 		// 								url: imageMaps[key].url,
// 		// 							},
// 		// 						});
// 		// 					}
// 		// 				}
// 		// 			});
// 		// 		}
// 		// 	}
// 		//
// 		// 	const parsedImageMaps = ImageUtils.chunk(parsedArr, IMAGE_KEYS);
// 		// 	return { [rootKey]: parsedImageMaps };
// 		// });
// 	};
//
// 	public static chunk = (arr: { [name: string]: { id: number; url: string } }[], keys: { [name: string]: string }) => {
// 		const out = [];
//
// 		for (const IMG_KEY in IMAGE_KEYS) {
// 			const newArr = [];
//
// 			for (const image in arr) {
// 				if (arr[image][IMG_KEY]?.url.includes(IMAGE_KEYS[IMG_KEY])) newArr.push(arr[image][IMG_KEY]);
// 			}
//
// 			const sorted = ImageUtils.sortById(newArr);
//
// 			if (sorted.length > 0) out.push({ [IMAGE_KEYS[IMG_KEY]]: sorted });
// 		}
//
// 		return out;
// 	};
//
// 	public static sortById = (arr: any[]): any[] =>
// 		arr.sort((a: { id: number }, b: { id: number }) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
// }
export default {};