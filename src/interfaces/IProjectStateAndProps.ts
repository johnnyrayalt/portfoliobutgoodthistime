import { Group } from './../types/GroupType';
import { IImageUrlMapping } from './IImageUrlMapping';

export interface IProjectStateAndProps {
	readonly type: Group;
	readonly images?: IImageUrlMapping[];
}
