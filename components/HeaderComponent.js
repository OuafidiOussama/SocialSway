import { FontAwesome6 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FaqScreen from '../screens/FaqScreen';
import { FaqIcon, HomeIcon } from '../styles/icons';


const Drawer = createDrawerNavigator();


const options = {
  headerStyle: {
    backgroundColor: '#ff6f61'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'medium',
  }

}
export default function HeaderComponent() {
  return (
    <Drawer.Navigator initialRouteName="Accueil" screenOptions={options} >
        <Drawer.Screen 
            name="Accueil" 
            component={HomeScreen} 
            options={
            {
                drawerIcon:HomeIcon, 
                headerRight: ()=>(
                <View style={{marginRight: 15}}>
                    <FontAwesome6 name="gear" size={24} color="white" />
                </View>
                )
            }
            } 
        />
        <Drawer.Screen name="FAQ" component={FaqScreen} options={{drawerIcon:FaqIcon}}/>
    </Drawer.Navigator>
  );
}

