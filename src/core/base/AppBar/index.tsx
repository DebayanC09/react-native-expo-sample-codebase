import React, {useCallback, useMemo, useState} from "react";

import {LayoutChangeEvent, Pressable, Text, View} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {Back, Menu} from "assets/svg";

import {BaseAppBarStyle} from "./style";

export interface AppBarProps {
  showMenu?: boolean;
  onMenuPress?: () => void;
  showBack?: boolean;
  onBackPress?: () => void;
  title?: string;
  leftViewContent?: React.ReactNode;
  rightViewContent?: React.ReactNode;
}

const AppBar = ({
  showMenu = false,
  onMenuPress,
  showBack = false,
  onBackPress,
  title = "",
  leftViewContent,
  rightViewContent,
}: AppBarProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [leftViewWidth, setLeftViewWidth] = useState(0);
  const [rightViewWidth, setRightViewWidth] = useState(0);

  const onLeftLayout = useCallback((event: LayoutChangeEvent) => {
    setLeftViewWidth(event.nativeEvent.layout.width);
  }, []);

  const onRightLayout = useCallback((event: LayoutChangeEvent) => {
    setRightViewWidth(event.nativeEvent.layout.width);
  }, []);

  const menu = useMemo(() => {
    if (showMenu) {
      return (
        <Pressable onPress={onMenuPress}>
          <Menu width={24} height={24} />
        </Pressable>
      );
    }
    return null;
  }, [showMenu, onMenuPress]);

  const back = useMemo(() => {
    if (showBack) {
      return (
        <Pressable
          onPress={() => {
            if (onBackPress) {
              onBackPress();
            } else {
              navigation.goBack();
            }
          }}>
          <Back width={24} height={24} />
        </Pressable>
      );
    }
    return null;
  }, [showBack, onBackPress, navigation]);

  const leftView = useMemo(() => {
    return (
      <View onLayout={onLeftLayout} style={BaseAppBarStyle.leftView}>
        {back}
        {menu}
        {leftViewContent}
      </View>
    );
  }, [leftViewContent, onLeftLayout, back, menu]);

  const titleComponent = useMemo(() => {
    if (title) {
      const titleMargin = {
        marginLeft:
          rightViewWidth > leftViewWidth ? rightViewWidth - leftViewWidth : 0,
        marginRight:
          leftViewWidth > rightViewWidth ? leftViewWidth - rightViewWidth : 0,
      };
      return (
        <View style={[BaseAppBarStyle.titleContainer, titleMargin]}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={BaseAppBarStyle.title}>
            {title}
          </Text>
        </View>
      );
    }
    return null;
  }, [title, leftViewWidth, rightViewWidth]);

  const rightView = useMemo(() => {
    return (
      <View onLayout={onRightLayout} style={BaseAppBarStyle.rightView}>
        {rightViewContent}
      </View>
    );
  }, [rightViewContent, onRightLayout]);

  return (
    <View
      style={[
        BaseAppBarStyle.container,
        {
          marginTop: insets.top,
        },
      ]}>
      {leftView}
      {titleComponent}
      {rightView}
    </View>
  );
};

export default React.memo(AppBar);
