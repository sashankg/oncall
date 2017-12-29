import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import tabs from '../Tabs.js';

export default TabNavigator(tabs, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
})
