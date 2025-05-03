import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "@/utils/colour";

const ListItem = ({ title, subTitle, onPress, style }: { title: string, subTitle?: string, onPress?: () => void, style?: StyleProp<ViewStyle> }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!!subTitle ? (<Text style={styles.subTitle}>{subTitle}</Text>) : null}
            </View>
            <Ionicons name="chevron-forward-outline" size={32} color={colors.grey} />
        </TouchableOpacity>
    )
}

export default ListItem;