
import { View, Text, StyleSheet } from 'react-native';

export default function Swipe(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: "40%",
        padding: "auto",
        borderWidth: 1,
        borderColor: "#B8B8B8",
        backgroundColor: "white",
        borderRadius: 1000,
        elevation: 10,
        shadowColor: "#dddddd",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    text: {
        textAlign: "center",
        fontSize: 48,
        fontWeight: "bold"
    }
});