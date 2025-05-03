import { StyleSheet } from "react-native";
import { colors } from "@/utils/colour";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image: {
      width: '100%',
      height: 200,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    innerTitle: {
      color: colors.orange,
      textDecorationLine: 'underline',
    },
    titleContainer: {
      marginVertical: 54,
    },
    signUpButton: {
      backgroundColor: colors.white,
    },
});

export default styles;