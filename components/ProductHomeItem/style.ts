import { colors } from "@/utils/colour";
import { spacing, layout, aspectRatios } from "@/utils/spacing";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: spacing.sm,
  },
  title: {
    color: colors.textGrey,
    paddingVertical: spacing.sm,
  },
  image: {
    width: layout.getGridItemWidth(),
    height: layout.getGridItemWidth() * aspectRatios.productCard,
    borderRadius: layout.borderRadius,
  },
  price: {
    color: colors.black,
    paddingBottom: spacing.sm,
  }
});

export default styles;