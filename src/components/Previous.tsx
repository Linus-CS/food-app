import { View, Text, StyleSheet } from "react-native";

export default function Previous(props: any) {
    const colors = ["#8AC926", "#EE9B01", "#E02B4F", "#DA6A00"];

    return (
        <View style={{ ...styles.container, ...props.style, backgroundColor: colors[props.id] }}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "5%",
        width: "80%",
        padding: "2.5%",
        borderRadius: 50,
        backgroundColor: "white",
        elevation: 10,
        shadowColor: "#dddddd",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 }
    },
    text: {
        fontStyle: "normal",
        fontSize: 16,
        color: "white",
        fontWeight: "600",
        textAlign: "center"
    }
});