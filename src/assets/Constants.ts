export interface ConstantsSchema {
	projects: {
		art: {
			[name: string]: {
				[name: string]: string;
			};
		};
	};
}

export const Constants: ConstantsSchema = {
	projects: {
		art: {
			alphaDecay: {
				key: 'alphaDecay',
				root: 'art',
				name: 'Alpha Decay',
				year: '2013',
				description:
					'Installation for my senior thesis at Pacific Northwest College of Art. This installation contains five discrete sculptures, found objects, a video loop, and four poems',
			},
			optimizedLivingSpaces: {
				key: 'optimizedLivingSpaces',
				root: 'art',
				name: 'Optimized Living Spaces #1',
				year: '2012',
				description: 'Paint and screen print on paper with pencil',
			},
		},
	},
};
