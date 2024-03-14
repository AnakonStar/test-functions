import { StyleSheet } from "react-native";

import { bgColor } from "@/styles/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
});

export default styles;