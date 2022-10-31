import { Children, useState } from 'react';
import { View } from 'react-native';
import Nav from '../components/Nav';


export default function Navigator(props: { children: any, default: string }) {
    const [current, setCurrent] = useState(props.default);

    return (
        <View>
            {getComponentByName(props.children, current)}
            <Nav navigate={(screen => setCurrent(screen))} screens={props.children.map(screen => screen.children)} />
        </View>
    );
}


function getComponentByName(components: any, name: string) {
    for (const component of components) {
        if (component.children === name) {
            return component;
        }
    }
    return <></>;
}