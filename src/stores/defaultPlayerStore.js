import { readable } from 'svelte/store';

export const defaultPlayer = readable({
	race: 'white',
	age: '25',
	hair: 'brown',
	height: "5'5",
	face: 'boyish',
	breasts: 'flat',
	butt: 'basic',
	body: 'chubby',
	physical_traits: [],

	career: 'unemployed',
	relationship: 'none',
	class: 'poor',
	life_traits: [],

	personality: 'shy',
	voice_and_speech: 'basic',
	intelligence: 'average',
	obsessions: [],
	style: 'basic',
	mental_traits: [],

	sexuality: 'straight',
	libido: 'normal',
	sexual_obsessions: [],
	sexual_traits: []
});
