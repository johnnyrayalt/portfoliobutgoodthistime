class ImagesApi {

	get = async (root: string, key: string) => {
			return await fetch(`http://localhost:4200/images/${root}/${key}`)
				.then(res => res.json())
	}

}

const singleton = new ImagesApi();
Object.freeze(singleton);
export default singleton;