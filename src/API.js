import axios from 'axios';
// Merci Jordan !!<3

export class Cocktail {

    static fromJson(raw) {
        const strIngredients = [];
        const strMeasures = [];
        const strInstructions = [];

        for (let i = 1; i <= 15; i++) {
            if (raw[`strIngredient${i}`] !== null && raw[`strIngredient${i}`] !== "") {
                strIngredients.push(raw[`strIngredient${i}`]);
            }
            if (raw[`strMeasure${i}`] !== null && raw[`strMeasure${i}`] !== "") {
                strMeasures.push(raw[`strMeasure${i}`]);
            }
        }

        strInstructions.push(raw[`strInstructions`]);


        return Object.assign(new Cocktail(), {
            idDrink: raw.idDrink,
            strDrink: raw.strDrink,
            strDrinkAlternate: raw.strDrinkAlternate,

            strTags: raw.strTags,
            strVideo: raw.strVideo,
            strCategory: raw.strCategory,

            strIBA: raw.strIBA,
            strAlcoholic: raw.strAlcoholic,
            strGlass: raw.strGlass,

            strInstructions: strInstructions,

            strDrinkThumb: raw.strDrinkThumb,
            strIngredients: strIngredients,
            strMeasures: strMeasures,
            strImageSource: raw.strImageSource,
            strImageAttribution: raw.strImageAttribution,
            strCreativeCommonsConfirmed: raw.strCreativeCommonsConfirmed,

            dateModified: raw.dateModified
        });
    }
}
export async function getDefault () {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .catch((e)=>{
        console.log(e);
    });
    
    // let cocktail = Cocktail.fromJson(response.data);
    return response.data;
}