import { colors } from "@/utils/colour";
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 75
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16
  },
  backContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;