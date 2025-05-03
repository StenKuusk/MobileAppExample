import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.7,
    elevation: 6,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
});

export default styles;