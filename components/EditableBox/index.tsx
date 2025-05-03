import { View, TextInput, Text } from "react-native";
import styles from "./style";

const EditableBox = ({label, value, onChangeText, editable}: {label: string, value: string, onChangeText: (text: string) => void, editable?: boolean}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} editable={editable} />
    </View>
  )
}

export default EditableBox;