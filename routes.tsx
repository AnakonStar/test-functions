import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, SecondScreen, ThirdScreen } from '@/screens/_router';
import { NavigationContainer } from "@react-navigation/native";

type StackType = {
    Home: undefined,
    SecondScreen: undefined,
    ThirdScreen: undefined
}

export type StackNavigation = NativeStackNavigationProp<StackType>;

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Home}
                    name="Home"
                />
                <Stack.Screen
                    component={SecondScreen}
                    name="SecondScreen"
                />
                <Stack.Screen
                    component={ThirdScreen}
                    name="ThirdScreen"
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}