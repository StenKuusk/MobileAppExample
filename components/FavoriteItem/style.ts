import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colour";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 24,
      paddingVertical: 16,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.borderColor,
    },
    title: {
      color: colors.textGrey,
      paddingVertical: 8,
    },
    price: {
      color: colors.black,
      paddingBottom: 8,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 16,
    },
    content: {
      flex: 1,
    },
    icon: {
      width: 24,
      height: 24,
    },
});

export default styles;