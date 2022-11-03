import { View, Text, StyleSheet, Image } from 'react-native';

export default function Category(props: any) {
    return (
        <View style={styles.container}>

            <View style={styles.flexContainer}>
                <Image style={styles.img} source={props.source} />
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: "5%",
        marginHorizontal: "7%",
        width: "36%",
        height: "27%",
        backgroundColor: "white",
        elevation: 10,
        shadowColor: "#dddddd",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 }
    },
    flexContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 90,
        height: 90,
    },
    text: {
        fontSize: 16,
        fontWeight: "800",
        margin: "15%"
    }
});