import { TouchableOpacity, View, Image } from "react-native";
import styles from "./style";

const Checkbox = ({checked = false, onCheck}: {checked: boolean, onCheck: (checked: boolean) => void}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => onCheck(!checked)}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.checkIcon} source={require('@/assets/images/CheckIcon.png')} />
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

export default Checkbox