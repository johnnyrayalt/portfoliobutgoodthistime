import { Group } from '../types/GroupType';
import { IProjectTile } from './IProjectTile';

export interface IProjectGrid {
	type: Group;
	projectsList: IProjectTile[];
}
