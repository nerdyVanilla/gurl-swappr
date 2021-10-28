import { writable } from 'svelte/store';

export const attributes = writable({
	race: ['asian', 'white'],
	age: ['19', '22', '25'],
	hair: ['blonde', 'brown', 'ginger'],
	height: ["5'0", "5'5", "5'10"],
	face: ['boyish', 'beautiful'],
	breasts: ['flat', 'small', 'endowed'],
	butt: ['basic', 'bubble'],
	body: ['athletic', 'chubby', 'skinny'],
	physical_traits: ['low stamina'],

	career: ['high school (senior year)', 'college student', 'unemployed', 'business'],
	relationship: ['none', 'horny male roommate', 'rich husband'],
	class: ['poor', 'middle class', 'wealthy'],
	life_traits: ['pregnant'],

	personality: ['shy', 'friendly', 'bitchy'],
	voice_and_speech: ['basic', 'broken english', 'meek'],
	intelligence: ['smart', 'average', 'ditzy'],
	obsessions: ['church', 'parties', 'social media', 'technology'],
	style: ['classy', 'alternative', 'basic', 'low-effort', 'slutty'],
	mental_traits: ['bimbo speak', 'boy amnesia', 'ladylike', 'lazy', 'no swearing'],

	sexuality: ['straight', 'lesbian', 'bisexual'],
	libido: ['normal', 'horny', 'extremely horny'],
	sexual_obsessions: ['blowjob', 'no premarital sex'],
	sexual_traits: [
		'easy to orgasm',
		'no solo orgasm',
		'sensitive breasts',
		'submissive',
		'very naive'
	]
});
