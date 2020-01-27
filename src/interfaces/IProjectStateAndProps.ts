import { IImageUrlMapping } from './IImageUrlMapping';

export interface IProjectStateAndProps {
	type: 'web' | 'art' | '';
	images: IImageUrlMapping[];
}
