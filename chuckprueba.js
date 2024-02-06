const fetch =require('node-fetch');
const sc = require("prompt-sync")({ sigint: true })
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(result => result.json())
.then(jsonData => {
let nomCoctel;
//el menu del cual el cliente nos va a pedir el coctel 
console.log("MENÚ COCTELES->");
nomCoctel=sc("Digame que cóctel quiere que le sirva ->");

 for(const bebida of jsonData.drinks){
    if (nomCoctel.toLowerCase()===bebida.strDrink.toLowerCase()) {
        console.log(`Ingredientes para ${bebida.strDrink}:`);
        for (let i = 1; i <= 15; i++) {
            const ingrediente = bebida[`strIngredient${i}`];
            const num = bebida[`strMeasure${i}`];
            if (ingrediente && num) {
                console.log(`${num.trim()} de ${ingrediente.trim()}`);
            }
        }
    }
 }

})
.catch(error => console.error('Error fetching el json:', error));