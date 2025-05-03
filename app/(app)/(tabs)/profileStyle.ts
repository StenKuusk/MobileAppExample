import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    color: colors.grey,
  },
  content: {
    flex: 1,
  },
});

export default styles;