import { defineConfig, presets } from 'sponsorkit';

export default defineConfig({
	// Providers configs
	github: {
		login: 'cyberalien',
		type: 'user',
	},

	// Rendering configs
	width: 800,
	formats: ['json', 'svg', 'png'],
	outputDir: 'docs',
	tiers: [
		{
			title: 'Backers',
			preset: presets.base,
		},
		{
			title: 'Sponsors',
			monthlyDollars: 20,
			preset: presets.medium,
		},
		{
			title: 'Silver Sponsors',
			monthlyDollars: 50,
			preset: presets.large,
		},
		{
			title: 'Gold Sponsors',
			monthlyDollars: 100,
			preset: presets.xl,
		},
	],
});
