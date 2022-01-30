import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import { DestinationSearch, GuestScreen } from '../screens';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name={'Home'}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={'DestinationSearch'}
                    component={DestinationSearch}
                    options={{
                        title: 'Search Your Destination'
                    }}
                />

                <Stack.Screen
                    name={'GuestScreen'}
                    component={GuestScreen}
                    options={{
                        title: 'Guests'
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
