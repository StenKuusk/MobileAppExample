import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.grey,
  },
  image: {
    width: 32,
    height: 32,
  },
  imageContainer: {
    backgroundColor: colors.lightGrey,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  }
});

export default styles;