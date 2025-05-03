import { colors } from "@/utils/colour";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
  },
  list: {
    marginTop: 16,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  pagginationLine: {
    width: 20,
    height: 4,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30,
  },
});

export default styles;