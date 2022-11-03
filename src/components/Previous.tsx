import { View, Text, StyleSheet } from "react-native";

export default function Previous(props: any) {
    return (
        <View style={{ ...styles.container, ...props.style }}>
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
        color: "#424242",
        fontWeight: "600",
        textAlign: "center"
    }
});