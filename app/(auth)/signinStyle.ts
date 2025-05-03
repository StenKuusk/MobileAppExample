import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  button: {
    marginVertical: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 56,
  },
  footerText: {
    color: colors.blue,
  },
  footerLink: {
    color: colors.blue,
    fontWeight: 'bold',
    marginLeft: 8,
  }
});

export default styles;