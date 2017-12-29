import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Inbox from './Inbox';
import Logs from './Logs';

export default TabNavigator({
    Inbox: { screen: Inbox },
    Logs: { screen: Logs },
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
})
