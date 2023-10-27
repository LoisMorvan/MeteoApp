import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Weather from './weather';
import AboutPage from './aboutPage';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Weather"
                component={Weather}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-partly-sunny" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="About Us"
                component={AboutPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-information-circle" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
