import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

const useFocus = () => {
    const ref = useRef<TextInput>(null);

    const handleFocus = () => {
        ref.current?.focus();
    };

    const handleBlur = () => {
        ref.current?.blur();
    };

    return { inputRef: ref, handleFocus, handleBlur };
};

export default function ThirdScreen() {
    const { inputRef, handleFocus, handleBlur } = useFocus();

    return (
        <View style={styles.container}>
            <TextInput
                ref={inputRef}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
                placeholder="Digite algo..."
            />
            <Button title="Focar Input" onPress={handleFocus} />
            <Button title="Desfocar Input" onPress={handleBlur} />
        </View>
    );
};
