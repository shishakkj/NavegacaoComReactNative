import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createBottomTabNavigator();

import { Index } from '../screens/Index';
import { Sobre } from '../screens/Sobre';
import { Cadastro } from '../screens/Cadastro';
import { Home } from '../screens/Home';
import { StackRoutes } from './stack.routes';
import React from 'react';

export function TabsRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:({color, size})=>(
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='Index'
                component={Index}
                options={{
                    tabBarLabel: 'Index',
                    tabBarIcon:({color, size})=>(
                        <MaterialIcons
                            name="add"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            {/* <Screen
                name='Sobre'
                component={Sobre}
                options={{
                    
                }}
            />
            <Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    
                }}
                        
            /> */}
            
        </Navigator>
    )
}