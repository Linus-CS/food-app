
import { View, Text, StyleSheet } from 'react-native';
import Previous from '../components/Previous';
import RoundButton from '../components/RoundButton';
export default function Home(props: any) {
    // Replace with actual data
    const calories = 32412
    const previousSuggestions = ["Spaghetti Bolognese", "Diavolo Pizza", "Acai Bowl", "Klassischer Linseneintop"];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{calories.toLocaleString("de")}</Text>
            <Text style={styles.subHeader}>Total Calories</Text>
            <RoundButton style={styles.button}>GO!</RoundButton>
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