import { Group } from 'types/GroupType';
import { IImageUrlMapping } from './IImageUrlMapping';

export interface IProject {
	type: Group;
	imagesList: IImageUrlMapping[];
}
