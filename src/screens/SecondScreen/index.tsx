import * as React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';
import global from '@/styles/global';
import { ContextObject, ContextType } from '@/components/Context';
import { StackNavigation } from 'routes';
import { useNavigation } from '@react-navigation/native';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function SecondScreen() {
    const navigation = useNavigation<StackNavigation>()
    const { text, ChangeText } = React.useContext<ContextType>(ContextObject);

    const [data, setData] = React.useState<Todo | null>(null);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        setData(json);
    };

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <Button title='Mudar texto' onPress={() => ChangeText('Teste 2')} />
            <Button title='Voltar para a Home' onPress={() => navigation.goBack()} />

            {data ? (
                <>
                    <Text>Título: {data.title}</Text>
                    <Text>Completado: {data.completed.toString()}</Text>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View >
    )
}