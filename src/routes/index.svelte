<script lang="ts">
	export const prerender = true;
	import { JSONEditor } from 'svelte-jsoneditor'
	import * as JsonToTS from 'json-to-ts';

	 let content:any = {
    text: undefined, // used when in code mode
    json: {
      greeting: 'Please paste your Json here'
    }
  }

	let finalModel = '';

	// $: {
	// 	if(content) {
	// 		content = content
	// 		console.log("content", content);
	// 	} else {
	// 		content = {...content};
	// 	}
	// }


	$: {
		if(content) {
			finalModel = finalModel
			console.log("finalModel", finalModel);
		} else {
			finalModel = finalModel;
		}
	}


function handleChange(updatedContent: {
text: undefined; // used when in code mode
json: { greeting: string; };
}, previousContent: any, patchResult: any) {
    // content is an object { json: JSONData } | { text: string }
    console.log('onChange: ', updatedContent, previousContent, patchResult)
    content = updatedContent
		console.log(content.json,'content.json');
	   JsonToTS.default(content.json).forEach( typeInterface => {
      console.log(typeInterface)
			finalModel = typeInterface
    })
  }
</script>


<svelte:head>
	<title>Unlock Rules</title>
	<meta name="description" content="Unlock Rules App" />
</svelte:head>

<section>
	<h1 class="text-1xl text-center my-1 uppercase">
	 Welcome to UnlockRules App
	</h1>
	
	<div class="py-4 grid gap-4 md:grid-cols-1 grid-cols-1">
		<!-- <JSONEditor bind:content/> -->
		<JSONEditor {content} onChange="{handleChange}"  />
	</div>

	<div class="py-4 grid gap-4 md:grid-cols-1 grid-cols-1">
		<!-- <JSONEditor bind:content/> -->
	 	<code>{finalModel}</code>
	</div>
</section>