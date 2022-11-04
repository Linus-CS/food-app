

import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swipe from '../components/Swipe';

const heart = require("../../assets/heart.png");
const close = require("../../assets/close.png");

export default function Suggestion(props: any) {
    const [swipe, setSwipe] = useState(false);

    // Request new food items...
    const foods = ["Rote Linsen-Kokos-Suppe", "Spinat mit Spiegelei", "Eierkuchen", "Kartoffelpuffer", "Fischstäbchen", "Spaghetti Bolognese", "Diavolo Pizza", "Acai Bowl", "Klassischer Linseneintop"];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>FoodApp</Text>
            <Swipe swipeUp={swipe}>{foods}</Swipe>
            <View style={styles.gradeContainer}>
                <View onTouchEnd={() => {
                    setSwipe(true);
                    setTimeout(() => {
                        setSwipe(false);
                    }, 100);
                }} style={styles.closeContainer}>
                    <Image style={styles.close} source={close} />
                </View>
                <View onTouchEnd={() => {
                    setSwipe(true);
                    setTimeout(() => {
                        setSwipe(false);
                    }, 200);
                }} style={styles.heartContainer}>
                    <Image style={styles.heart} source={heart} />
                </View>
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
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        marginTop: "20%",
        marginBottom: "10%",
        fontSize: 24,
        fontWeight: "bold",
    },
    closeContainer: {
        backgroundColor: "#FFB8B8",
        width: "20%",
        aspectRatio: 1 / 1,
        borderRadius: 100,
        margin: "10%",
    },
    heartContainer: {
        backgroundColor: "#B8FFB8",
        width: "20%",
        aspectRatio: 1 / 1,
        borderRadius: 100,
        margin: "10%",
    },
    close: {
        width: 52,
        height: 52,
        margin: "19%",
    },
    heart: {
        width: 60,
        height: 60,
        marginVertical: "15%",
        marginHorizontal: "13%",
    }
});