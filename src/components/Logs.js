import React from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Logs extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Logs',
        tabBarIcon: () => <FontAwesome name="list" size={ 26 }/>,
    }

    render() {
        return <Text>
            Logs
        </Text>
    }
}
