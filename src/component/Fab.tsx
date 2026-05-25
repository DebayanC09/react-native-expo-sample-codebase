import {Pressable, StyleSheet, View} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import useAppTheme from "@/core/theme";

type FabProps = {onPress?: () => void};

const Fab = ({onPress}: FabProps) => {
  const {fab} = useAppTheme();

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.fab, {backgroundColor: fab.backgroundColor}]}>
        <MaterialIcons name="add" size={24} color={fab.iconColor} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 32,
    right: 16,
    borderRadius: 50,
    padding: 16,
  },
});

export default Fab;
