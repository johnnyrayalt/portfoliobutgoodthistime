export interface ConstantsSchema {
	projects: {
		[root: string]: {
			[key: string]: IProjectDetails;
		};
	};
}

export interface IProjectDetails {
	key: string;
	root: string;
	name: string;
	year: string;
	description: () => {};
}

export const Constants: ConstantsSchema = {
	projects: {
		art: {
			alpha_decay: {
				key: 'alpha_decay',
				root: 'art',
				name: 'Alpha Decay',
				year: '2013',
				description: () => {
					return `Alpha Decay was an installation for my senior thesis at Pacific Northwest College of Art.
                        The complete work contains five discrete sculptures comprised of both readymade and frabricated objects, found objects, a video loop, and four framed poems printed on pearlescent archival paper.`;
				},
			},
			optimized_living_spaces: {
				key: 'optimized_living_spaces',
				root: 'art',
				name: 'Optimized Living Spaces #1',
				year: '2012',
				description: () => {
					return 'Paint and screen print on paper with pencil.';
				},
			},
		},
		web: {
			borrow_fix: {
				key: 'borrow_fix',
				root: 'web',
				name: 'Borrow Fix',
				year: '2019',
				description: () => {
					return 'Description';
				},
			},
			loan_up: {
				key: 'loan_up',
				root: 'web',
				name: 'Loan Up',
				year: '2019',
				description: () => {
					return 'Description';
				},
			},
			lend_jet: {
				key: 'lend_jet',
				root: 'web',
				name: 'Lend Jet',
				year: '2019',
				description: () => {
					return 'Description';
				},
			},
		},
	},
};
