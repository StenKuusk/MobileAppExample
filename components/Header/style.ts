import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 54,
    marginTop: 10,
    marginLeft: 10,
  },
  Icon: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
  space: {
    width: 24,
  }
});

export default styles;