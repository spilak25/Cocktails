import { View, Image, Text } from "react-native";

export default function CocktailListItems({item}) {
    return (
        <View style={{borderBottomColor: "#000", borderBottomWidth: 2}}>
            <Text>{item.strDrink}</Text>
            <Image
                style={{width: "70%", aspectRatio: 1}}
                source={{uri: item.strDrinkThumb}}
            />
        </View>
    )
}


    // strDrinkThumb: raw.strDrinkThumb,
    //             idDrink: raw.idDrink,
    //             strDrink: raw.strDrink,