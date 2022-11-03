

import { View, Text, StyleSheet } from "react-native";

export default function RoundButton(props: any) {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <Text style={styles.text}>{props.children}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "60%",
        height: "30%",
        borderColor: "#B8B8B8",
        backgroundColor: "white",
        borderRadius: 1000,
        elevation: 10,
        shadowColor: "#dddddd",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 }
    },
    text: {
        fontStyle: "normal",
        paddingTop: "34%",
        textAlign: "center",
        fontSize: 64,
        fontWeight: "900",
    }
});