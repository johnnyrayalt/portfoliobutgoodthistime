import { IParsedImageList } from '../interfaces/IParsedImageList';

class ImagesApi {

	get = async (root: string, key: string, size: string): Promise<IParsedImageList> => {
		return await fetch(`http://localhost:4200/images/${root}/${key}/${size}`)
			.then(res => res.json())
			.catch(err => {
				throw new Error(err.message);
			});
	};

}

const singleton = new ImagesApi();
Object.freeze(singleton);
export default singleton;