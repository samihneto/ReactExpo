import { StyleSheet, Text, Pressable } from "react-native";

interface FokusButtonProps {
  onPress: () => void;
  title: string;
  icon: any;
}


export default function FokusButton({onPress, title, icon}: FokusButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  )

}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold',

  },

})