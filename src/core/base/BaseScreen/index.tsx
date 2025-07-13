import {ReactNode} from "react";

import {View} from "react-native";

import AppBar, {AppBarProps} from "../AppBar";

import {BaseScreenStyle} from "./style";

interface BaseScreenProps {
  children: ReactNode;
  appBarProps?: AppBarProps;
}

const BaseScreen = ({children, appBarProps}: BaseScreenProps) => {
  return (
    <View style={BaseScreenStyle.container}>
      <AppBar {...appBarProps} />
      {children}
    </View>
  );
};

export default BaseScreen;
