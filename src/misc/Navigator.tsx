import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Nav from '../components/Nav';


export default function Navigator(props: { children: any, default: string }) {
    const [current, setCurrent] = useState(props.default);
    const [showNav, setShowNav] = useState(true);

    if (showNav) {
        return (
            <View style={styles.container}>
                {getComponentByName(props.children, current)}
                <Nav current={current} navigate={(screen => setCurrent(screen))} screens={props.children.map(screen => screen.props.children)} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {getComponentByName(props.children, current)}
        </View>
    );
}


function getComponentByName(components: any, name: string) {
    for (const component of components) {
        if (component.props.children[0] === name) {
            return component;
        }
    }
    return <></>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "flex-end",
    },
});