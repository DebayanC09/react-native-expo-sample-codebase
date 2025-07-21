import {Pressable, View} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {FabStyle} from "./style";

type FabProps = {onPress?: () => void};

const Fab = ({onPress}: FabProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={FabStyle.fab}>
        <MaterialIcons name="add" size={24} color="white" />
      </View>
    </Pressable>
  );
};

export default Fab;
