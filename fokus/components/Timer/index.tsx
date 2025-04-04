import { Text, StyleSheet } from "react-native";

interface TimerProps {
    totalSeconds: number;
}

export default function Timer({ totalSeconds }: TimerProps) {
    const date = new Date(totalSeconds * 1000);
    const options: Intl.DateTimeFormatOptions = { minute: '2-digit', second: '2-digit' };

    return (
        <Text style={styles.timer}>
            {date.toLocaleTimeString('pt-BR', options)}
        </Text>
    );
}

const styles = StyleSheet.create({
    timer: {
        fontSize: 54,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
