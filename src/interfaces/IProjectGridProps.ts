export interface IProjectGridProps {
	type: 'web' | 'art';
	projects: {
		name: string;
		link: string;
		image: string;
	}[];
}
