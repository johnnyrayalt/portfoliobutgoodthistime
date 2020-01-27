import { IProjectTileProps } from 'interfaces/IProjectTileProps';

export interface IProjectGridProps {
	readonly type: 'web' | 'art';
	readonly projects: IProjectTileProps[];
}
