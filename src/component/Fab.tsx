import {Pressable, StyleSheet, View} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type FabProps = {onPress?: () => void};

const Fab = ({onPress}: FabProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.fab}>
        <MaterialIcons name="add" size={24} color="white" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 32,
    right: 16,
    backgroundColor: "black",
    borderRadius: 50,
    padding: 16,
  },
});

export default Fab;
