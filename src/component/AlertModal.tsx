import React from "react";

import {Modal, StyleSheet, View} from "react-native";

import useAppTheme from "@/core/theme";

import AppText from "./AppText";

interface AlertModalProps {
  visible: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  const {alertModal} = useAppTheme();
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}>
      <View
        style={[
          styles.centeredView,
          {backgroundColor: alertModal.centeredView.backgroundColor},
        ]}>
        <View
          style={[
            styles.modalView,
            {backgroundColor: alertModal.modalView.backgroundColor},
          ]}>
          <AppText style={[styles.title, {color: alertModal.titleColor}]}>
            {title}
          </AppText>
          <AppText style={{color: alertModal.descriptionColor}}>
            {description}
          </AppText>
          <View style={styles.buttonContainer}>
            <AppText
              style={{color: alertModal.buttonTextColor.cancel}}
              onPress={onCancel}>
              {cancelText}
            </AppText>
            <AppText
              style={{color: alertModal.buttonTextColor.confirm}}
              onPress={onConfirm}>
              {confirmText}
            </AppText>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 10,
    padding: 24,
    width: "80%",
    elevation: 5,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "flex-end",
  },
});

export default AlertModal;
