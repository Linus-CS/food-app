import { View, Text, StyleSheet } from 'react-native';
import NavElement from './NavElement';

export default function Nav(props: any) {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                {props.screens.map(([name, img]) => <NavElement key={Math.random()} active={name === props.current} name={name} img={img} onTouch={() => props.navigate(name)} />)}
                <Text></Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: "10%",
        borderWidth: 1,
        borderColor: "#C3C3C3"
    },
    flexContainer: {
        flex: 1,
        flexDirection: "row"
    }
});