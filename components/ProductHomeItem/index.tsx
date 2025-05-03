import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./style";

const ProductHomeItem = ({ title, image, price, onPress }: { title: string, image: string, price: number, onPress?: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image style={styles.image} source={{ uri: image }} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductHomeItem;