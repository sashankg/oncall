import React from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Inbox extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => <FontAwesome name="inbox" size={ 26 }/>,
    }
    
    render() {
        return <Text>
            Inbox
        </Text>
    }
}
