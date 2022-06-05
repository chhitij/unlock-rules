<script context="module">
  // call lead function first before render page 
  export async function load({ fetch, params}){
   
   
    let id = params.id
    const url = `http://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const pokeman = await response.json()
    console.log("pokeman", pokeman)
    if(response.ok){
        return  {props:{pokeman}}
    }
    return {
        status: response.status,
        error : new Error(" sorry no user found")
    }
    }
      
</script>
<script>
  export let pokeman; // expecting a property here 
</script>
<h1>{pokeman.name}</h1>