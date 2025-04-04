import { Pressable, Text, StyleSheet } from "react-native";

interface ActionButtonProps {
    active: boolean;
    onPress: () => void;
    display: string;
  }

export default function ActionButton ( { active, onPress, display }: ActionButtonProps) {
    return (
        <Pressable
            style={active ? styles.contextButtonActive : null}
            onPress={onPress}
        >
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8,
  },
})