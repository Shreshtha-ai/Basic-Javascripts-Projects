async function getPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const data = await response.json();
        console.log(`Name: ${data.name}`);
        console.log(`Height: ${data.height}`);
        console.log(`Weight: ${data.weight}`);

        console.log("\nTypes:");
        for(const type of data.types){
            console.log(type.type.name);
            
        }
        

    }
    catch(error){
        console.log(error);
        
        
    }
}

const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter pokemon name: ", (pokemonName) => {
    getPokemon(pokemonName);
    r1.close();

})
