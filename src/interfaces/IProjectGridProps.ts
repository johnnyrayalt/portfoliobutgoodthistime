import { IProjectTileProps } from './IProjectTileProps';

export interface IProjectGridProps {
	readonly type: 'web' | 'art';
	readonly projects: IProjectTileProps[];
}
