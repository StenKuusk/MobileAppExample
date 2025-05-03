import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.7,
    elevation: 6,
    borderRadius: 4,
    backgroundColor: colors.white,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    marginBottom: 6,
    color: colors.grey,
  },
  input: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: '500',
  },
});

export default styles;