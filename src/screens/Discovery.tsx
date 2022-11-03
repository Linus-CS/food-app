
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Category from '../components/Category';

const salat = require("../../assets/salat.png");
const pizza = require("../../assets/pizza.png");
const apple = require("../../assets/apple.png");
const fork = require("../../assets/fork.png");
const cake = require("../../assets/cake-piece.png");
const burger = require("../../assets/burger.png");

export default function Discovery(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Discovery</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Category source={salat}>Salats</Category>
                <Category source={pizza}>Pizza</Category>
                <Category source={apple}>Fruits</Category>
                <Category source={fork}>Pasta</Category>
                <Category source={cake}>Cake</Category>
                <Category source={burger}>Burger</Category>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: 24,
        marginTop: "15%",
        marginBottom: "5%",
    },
    scrollContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }
});