import { View, Text } from "react-native";
import styles from "./style";

const Seperator = ({text}: {text: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  )
}

export default Seperator