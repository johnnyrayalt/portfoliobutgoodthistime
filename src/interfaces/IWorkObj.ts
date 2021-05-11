export interface IWorkObj {
	[name: string]: string | undefined | string[];
	key: string;
	name: string;
	year: string;
	link?: string | undefined;
	description: string[];
}