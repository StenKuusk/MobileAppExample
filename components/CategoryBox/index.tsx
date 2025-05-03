import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./style";
import { colors } from "@/utils/colour";
const CategoryBox = ({ title, image, onPress, isSelected }: { title: string, image: string, onPress?: () => void, isSelected?: boolean }) => {
    return (
        <TouchableOpacity style={[styles.container, isSelected ? {backgroundColor: colors.black} : {}]} onPress={onPress}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : {}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBox;