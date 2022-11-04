
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Previous from '../components/Previous';
import RoundButton from '../components/RoundButton';
import Suggestion from './Suggestion';
// import EncryptedStorage from 'react-native-encrypted-storage';

export default function Home(props: any) {
    const [suggest, setSuggest] = useState(false);

    const [calories, setCalories] = useState(3215);
    const [previousSuggestions, setPrevious] = useState(["Spaghetti Bolognese", "Diavolo Pizza", "Acai Bowl", "Klassischer Linseneintop"]);


    // useEffect(() => {
    //     (async () => {
    //         setCalories(await retrieveLocal("calories"))
    //         setPrevious(await retrieveLocal("previous_suggestions"))
    //     })();
    // }, []);

    if (suggest) {
        return <Suggestion></Suggestion>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{calories.toLocaleString("de")}</Text>
            <Text style={styles.subHeader}>Total Calories</Text>
            <RoundButton style={styles.button} onTouchEnd={() => setSuggest(true)}>GO!</RoundButton>
            <Text style={styles.secondHeader}>Previous suggestged meals</Text>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
                {previousSuggestions.map((item, index) => <Previous style={styles.meals} key={index} id={index} > {item}</Previous>)}
            </ScrollView>
        </View >
    );
}

// async function retrieveLocal(name: string) {
//     try {
//         const value = await EncryptedStorage.getItem(name);
//         if (value !== undefined) {
//             return JSON.parse(value);
//         }
//     } catch (error) {
//         console.log("Error while retrieving from local storage: ", error.code);
//     }
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        fontStyle: "normal",
        fontSize: 64,
        fontWeight: "bold",
        marginTop: "20%",
    },
    subHeader: {
        fontSize: 13,
        fontWeight: "normal",
        color: "#969696",
    },
    button: {
        marginTop: "10%",
    },
    secondHeader: {
        fontSize: 15,
        fontWeight: "800",
        marginTop: "15%",
        marginBottom: "7%",
    },
    scrollContainer: {
        flex: 1,
        alignItems: "center",
    },
    meals: {
        margin: "1%"
    }

});