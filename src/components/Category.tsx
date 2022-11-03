import { View, Text, StyleSheet, Image } from 'react-native';

export default function Category(props: any) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={props.source} />
            <Text>{props.children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "40%",
        height: "25%",
        backgroundColor: "white",
        borderRadius: 1000,
        elevation: 10,
        shadowColor: "#dddddd",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 }
    },
    img: {
        width: 100,
        height: 100,
    }
});