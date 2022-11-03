
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swipe from '../components/Swipe';

const heart = require("../../assets/heart.png");
const close = require("../../assets/close.png");

export default function Suggestion(props: any) {
    const [foodItem, setFoodItem] = useState("Rote Linsen-Kokos-Suppe");

    function newFoodItem() {
        // Request new food item or list...
        setFoodItem("Test");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>FoodApp</Text>
            <Swipe new={() => newFoodItem()}>foodItem</Swipe>
            <View>
                <Image style={styles.img} source={heart} />
                <Image style={styles.img} source={close} />
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
    header: {
        fontSize: 24,
        fontWeight: "bold",
    },
    img: {
        width: 100,
        height: 100,
    }
});