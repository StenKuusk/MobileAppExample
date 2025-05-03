import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
  },
  content: {},
  sectionTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dotted',
    flexDirection: 'column',
    marginRight: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadPlus: {
    color: colors.grey,
    fontSize: 28,
  },
  imageContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  delete: {
    width: 24,
    height: 24,
    marginTop: -10,
    marginLeft: -16,
  },
  textarea: {
    minHeight: 120,
    paddingTop: 16,
  },
});

export default styles;