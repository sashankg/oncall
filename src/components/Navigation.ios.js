import { TabNavigator } from 'react-navigation';
import Inbox from './Inbox';

export default TabNavigator({
    Inbox: { screen: Inbox }
}, {
    tabBarPosition: 'bottom',
})
