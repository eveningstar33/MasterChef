import axios from 'axios';

async function getResults(query) {
    const key = 'df4647627bd4df1caaa22b36efeed70a';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }

}
getResults('tomato pasta');
