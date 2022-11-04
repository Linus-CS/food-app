
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Previous from '../components/Previous';
import RoundButton from '../components/RoundButton';
import Suggestion from './Suggestion';
export default function Home(props: any) {
    const [suggest, setSuggest] = useState(false);

    // Replace with actual data
    const calories = 32412
    const previousSuggestions = [["Spaghetti Bolognese", "#8AC926"], ["Diavolo Pizza", "#EE9B01"], ["Acai Bowl", "#E02B4F"], ["Klassischer Linseneintop", "#DA6A00"]];

    if (suggest) {
        return <Suggestion></Suggestion>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{calories.toLocaleString("de")}</Text>
            <Text style={styles.subHeader}>Total Calories</Text>
            <RoundButton style={styles.button} onTouchEnd={() => setSuggest(true)}>GO!</RoundButton>
            <Text style={styles.secondHeader}>Previous suggestged meals</Text>
            {previousSuggestions.map(item => <Previous style={styles.meals} key={Math.random()}>{item}</Previous>)}
        </View>
    );
}


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
    meals: {
        margin: "1%"
    }

});