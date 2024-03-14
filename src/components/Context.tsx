import * as React from 'react';

export interface ContextType {
    text: string,
    ChangeText: (text: string) => void
}

export const ContextObject = React.createContext<ContextType>({
    text: 'Teste',
    ChangeText: () => { }
});

export default function Context({ children }: any) {
    const [text, setText] = React.useState<string>('Teste');

    function ChangeText(text: string) {
        setText(text)
    }

    return (
        <ContextObject.Provider value={{ text, ChangeText }}>
            {children}
        </ContextObject.Provider>
    )
}