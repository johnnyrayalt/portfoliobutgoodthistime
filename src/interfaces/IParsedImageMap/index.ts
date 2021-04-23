export interface IParsedImageMap {
	[root: string]: {
		[key: string]: {
			id: number;
			url: string;
		}[];
	};
}
