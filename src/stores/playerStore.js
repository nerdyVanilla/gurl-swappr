import { writable } from 'svelte/store';

export const player = writable({
	race: true,
	age: true,
	hair: true,
	height: true,
	face: true,
	breasts: true,
	butt: true,
	body: true,
	physical_traits: [false],

	career: true,
	relationship: true,
	class: true,
	life_traits: [false],

	personality: true,
	voice_and_speech: true,
	intelligence: true,
	obsessions: [false],
	style: true,
	mental_traits: [false],

	sexuality: true,
	libido: true,
	sexual_obsessions: [false],
	sexual_traits: [false]
});
