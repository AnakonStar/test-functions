import * as React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import global from '@/styles/global';
import { ContextObject, ContextType } from '@/components/Context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from 'routes';

export default function Home() {
    const navigation = useNavigation<StackNavigation>()

    const { text, ChangeText } = React.useContext<ContextType>(ContextObject)

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <Button title='Mudar texto' onPress={() => ChangeText('Teste 1')} />
            <Button title='Navegar para a segunda tela' onPress={() => navigation.navigate('SecondScreen')} />
            <Button title='Navegar para a terceira tela' onPress={() => navigation.navigate('ThirdScreen')} />
        </View>
    )
}