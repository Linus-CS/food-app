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
        borderWidth: 1,
        height: "5%",
        width: "80%",
        padding: "2.5%",
        borderColor: "#D3D3D3",
        borderRadius: 50,
    },
    text: {
        fontStyle: "normal",
        fontSize: 16,
        color: "#424242",
        fontWeight: "600",
        textAlign: "center"
    }
});