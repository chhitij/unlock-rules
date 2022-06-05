import { writable } from 'svelte/store';

export const pokemon:any = writable([]);

const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();

	const loadedPokemon = data.results.map((data: any, index: any) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${index}.png`
		};
	});
	pokemon.set(loadedPokemon);
};

fetchPokemon();