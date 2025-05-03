import { TouchableOpacity, Text, ViewStyle  } from "react-native";
import styles from "./style";
import { colors } from "@/utils/colour";
const Button = ({ title, onPress, style, color = colors.white }: { title: string, onPress?: () => void, style?: ViewStyle, color?: string }) => {

  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.6} onPress={onPress}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;  