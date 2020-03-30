import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Incidents from '../src/views/Incidents';
import Detail from '../src/views/Detail';

const AppStack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents}></AppStack.Screen>
                <AppStack.Screen name="Detail"  component={Detail}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;