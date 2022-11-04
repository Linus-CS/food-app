
import { useState, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';


export default function Swipe(props: any) {
    const [transform, setTransform] = useState(0);
    const [posX, setPosX] = useState(~0);
    const [isRunning, setIsRunning] = useState(false);
    const [foodId, setFoodId] = useState(0);
    const animationValue = useRef(new Animated.Value(0)).current;

    if (transform > 20 && !isRunning) {
        setIsRunning(true);
        setPosX(~0);
        setTransform(0);
        Animated.timing(animationValue, {
            toValue: 1000,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                if (foodId < props.children.length - 1) {
                    setFoodId(foodId + 1);
                }
                animationValue.setValue(0);
                setIsRunning(false);
            }, 100)
        });
    }

    if (transform < -20 && !isRunning) {
        setIsRunning(true);
        setPosX(~0);
        setTransform(0);
        Animated.timing(animationValue, {
            toValue: -1000,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                if (foodId < props.children.length - 1) {
                    setFoodId(foodId + 1);
                }
                animationValue.setValue(0);
                setIsRunning(false);
            }, 100)
        });
    }

    return (
        <Animated.View
            onTouchStart={(e) => setPosX(e.nativeEvent.locationX)}
            onTouchMove={(e) => {
                if (posX != ~0) {
                    setTransform(((posX - e.nativeEvent.locationX) * -1) / 10);
                }
            }}
            onTouchEnd={() => setTransform(0)}
            style={{ ...styles.container, transform: [{ rotate: `${transform}deg` }, { translateX: animationValue }] }}>
            <Text style={styles.text}>{props.children[foodId]}</Text>
        </Animated.View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "52%",
        padding: "auto",
        backgroundColor: "white",
        elevation: 10,
        shadowColor: "#dddddd",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 4 },
        transform: [{ rotate: "10deg" }]
    },
    text: {
        textAlign: "center",
        fontSize: 48,
        fontWeight: "bold",
        marginTop: "25%",
    }
});