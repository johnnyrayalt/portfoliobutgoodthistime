export interface ConstantsSchema {
	projects: {
		[name: string]: {
			[name: string]: {
				[name: string]: string;
			};
		};
	};
}

export const Constants: ConstantsSchema = {
	projects: {
		art: {
			alpha_decay: {
				key: 'alpha_decay',
				root: 'art',
				name: 'Alpha Decay',
				year: '2013',
				description:
					'Installation for my senior thesis at Pacific Northwest College of Art. This installation contains five discrete sculptures, found objects, a video loop, and four poems',
			},
			optimized_living_spaces: {
				key: 'optimized_living_spaces',
				root: 'art',
				name: 'Optimized Living Spaces #1',
				year: '2012',
				description: 'Paint and screen print on paper with pencil',
			},
		},
		web: {
			borrow_fix: {
				key: 'borrow_fix',
				root: 'web',
				name: 'Borrow Fix',
				year: '2019',
				description: 'Description',
			},
			loan_up: {
				key: 'loan_up',
				root: 'web',
				name: 'Loan Up',
				year: '2019',
				description: 'Description',
			},
			lend_jet: {
				key: 'lend_jet',
				root: 'web',
				name: 'Lend Jet',
				year: '2019',
				description: 'Description',
			},
		},
	},
};
