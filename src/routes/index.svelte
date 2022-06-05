<script lang="ts">
	export const prerender = true;
	import {pokemon} from "../stores/unlock-rules"; 
	import PokemanCard from '../components/pokemanCard.svelte';
	let serachTerm = ""
	let filteredPokemon = [];

	$: {
		// console.log(serachTerm)
		if(serachTerm) {
			// serach Pokemon
			filteredPokemon = $pokemon.filter(pokeman=> pokeman.name.toLowerCase().includes(serachTerm))
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>


<svelte:head>
	<title>Unlock Rules</title>
	<meta name="description" content="Unlock Rules App" />
</svelte:head>

<section>
	<h1 class="text-2xl text-center my-8 uppercase">
		<div class="welcome">
           Welcome  To Unlock Rules App
		</div>
		
	</h1>
	<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" placeholder="Search Pkemon"
	bind:value={serachTerm}>
	<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
	 <PokemanCard pokeman ={pokeman}></PokemanCard>
	{/each}
	</div>
</section>