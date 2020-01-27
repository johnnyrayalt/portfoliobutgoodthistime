import { Group } from 'types/GroupType';
import { IProjectTileProps } from './IProjectTileProps';

export interface IProjectGrid {
	type: Group;
	projectsList: IProjectTileProps[];
}
