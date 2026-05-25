import {StyleSheet, View} from "react-native";

import useAppTheme from "@/core/theme";

const Divider = () => {
  const {divider} = useAppTheme();

  return (
    <View
      style={[styles.divider, {backgroundColor: divider.backgroundColor}]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
});

export default Divider;
