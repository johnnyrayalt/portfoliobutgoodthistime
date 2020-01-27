import { IImageUrlMapping } from './IImageUrlMapping';

export interface IProjectStateAndProps {
	readonly type: 'web' | 'art' | '';
	readonly images: IImageUrlMapping[];
}
