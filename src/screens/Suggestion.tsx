
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swipe from '../components/Swipe';

const heart = require("../../assets/heart.png");
const close = require("../../assets/close.png");

export default function Suggestion(props: any) {

    // Request new food items...
    const foods = ["Rote Linsen-Kokos-Suppe", "Spinat mit Spiegelei", "Eierkuchen", "Kartoffelpuffer", "Fischstäbchen"];


    return (
        <View style={styles.container}>
            <Text style={styles.header}>FoodApp</Text>
            <Swipe>{foods}</Swipe>
            <View style={styles.gradeContainer}>
                <Image style={styles.close} source={close} />
                <Image style={styles.heart} source={heart} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    gradeContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: "10%",
    },
    header: {
        marginTop: "20%",
        marginBottom: "10%",
        fontSize: 24,
        fontWeight: "bold",
    },
    close: {
        width: 52,
        height: 52,
        margin: "10%",
    },
    heart: {
        width: 60,
        height: 60,
        margin: "10%",
    }
});