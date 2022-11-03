import { View, Text, StyleSheet } from "react-native";

export default function NavElement(props: any) {
    return (
        <View onTouchEnd={props.onTouch} style={styles.container}>
            {props.img}
            <Text style={{ ...styles.text, color: props.active ? "#E02B4F" : "#777777" }}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "2%",
        alignItems: "center",
        flexDirection: "column"
    },
    text: {
        marginTop: "5%",
        fontWeight: "bold",
    }
});