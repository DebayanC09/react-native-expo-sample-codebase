import {ReactNode} from "react";

import {ActivityIndicator, View} from "react-native";

import AppBar, {AppBarProps} from "../AppBar";

import {BaseScreenStyle} from "./style";

interface BaseScreenProps {
  children: ReactNode;
  showLoader?: boolean;
  appBarProps?: AppBarProps;
}

const BaseScreen = ({children, showLoader, appBarProps}: BaseScreenProps) => {
  return (
    <>
      <View style={BaseScreenStyle.container}>
        <AppBar {...appBarProps} />
        {children}
      </View>
      {showLoader ? (
        <View style={BaseScreenStyle.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
    </>
  );
};

export default BaseScreen;
