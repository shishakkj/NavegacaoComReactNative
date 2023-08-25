import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Index } from '../screens/Index';
import { Sobre } from '../screens/Sobre';
import { Home } from '../screens/Home';
import { Cadastro } from '../screens/Cadastro';
import { TabsRoutes } from './tabs.routes';
import { ImageBackground } from 'react-native/types';
import React from 'react';

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen
                name='Tabs'
                options={{
                    headerShown: false
                }}
                component={TabsRoutes}
            />

            <Screen
                name='Home'
                options={{
                    title: 'Home',
                    headerShown: false
                }}
                component={Home}
            />

            <Screen
                name='Index'
                options={{
                    title: 'Index',
                    headerShown: false
                }}
                component={Index}
            />
            <Screen
                name='Sobre'
                options={{
                    title: 'Sobre',
                    headerShown: false
                }}
                component={Sobre}
            />
            <Screen
                name='Cadastro'
                options={{
                    title: 'Cadastro',
                    headerShown: false
                }}
                component={Cadastro}
            />

        </Navigator>
    )
}