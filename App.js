import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getDefault } from './src/API';
import CocktailListItems from './src/components/CocktailListItems';

export default function App() {
  const [cocktails, setCocktails] = useState([null]);

  useEffect(()=>{
    (async()=> {
      const _cocktails = await getDefault();
      setCocktails(_cocktails.drinks);
      console.log(cocktails); 
    })();
  },[])

  if (cocktails == null || cocktails == undefined) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    )
  }

  if (cocktails.length==0) {
    
    <View style={styles.container}>
      {cocktails.length==0 && (
        <Text>Il n'y a aucun cocktails actuellement</Text>
      )}
    </View>
    return;
  }

  return (
    <View>
      <ScrollView>
        {cocktails.map(function (value, index) {
          return <CocktailListItems key={index} item={value} />
        })}
      </ScrollView> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
