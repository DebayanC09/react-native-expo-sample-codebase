import {useCallback, useState} from "react";

import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useRouter} from "expo-router";

import {AlertModal, AppText, Divider, Fab} from "@/component";
import {BaseScreen} from "@/core/base";
import {DeleteTodoRequest, TodoModel} from "@/model/todo";
import {useDeleteTodoMutation, useTodoListQuery} from "@/query";
import {AppColor} from "@/utils";

import {TodoType} from "../type";

const TodoListScreen = () => {
  const {isTodoListLoading, todoListData} = useTodoListQuery();
  const {isDeleteTodoLoading, callDeleteTodo} = useDeleteTodoMutation();
  const router = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | undefined>(
    undefined,
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TodoModel>) => (
      <View style={styles.itemContainer}>
        <View style={styles.itemHeader}>
          <AppText style={styles.title}>{item.title}</AppText>
          <MaterialIcons
            name="edit"
            size={24}
            color="blue"
            onPress={() => {
              router.push({
                pathname: "/(todo)/add-update",
                params: {todoId: item._id, type: TodoType.UPDATE},
              });
            }}
          />
          <MaterialIcons
            name="delete"
            size={24}
            color="red"
            onPress={() => {
              setSelectedTodoId(item._id);
              setShowDeleteAlert(true);
            }}
          />
        </View>
        <AppText>{item.description}</AppText>
        <Divider />
        <View style={styles.itemFooter}>
          <AppText>{item.dateTime}</AppText>
          <AppText>{item.priority}</AppText>
        </View>
      </View>
    ),
    [router],
  );

  return (
    <BaseScreen
      showLoader={isTodoListLoading || isDeleteTodoLoading}
      appBarProps={{
        title: "Todo List",
      }}>
      <FlatList
        data={todoListData?.data ?? []}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
      />
      <Fab
        onPress={() => {
          router.push({
            pathname: "/(todo)/add-update",
            params: {type: TodoType.ADD},
          });
        }}
      />
      <AlertModal
        visible={showDeleteAlert}
        title="Alert"
        description="Are you sure you want to delete this todo?"
        onConfirm={() => {
          if (selectedTodoId) {
            callDeleteTodo({
              todoId: selectedTodoId,
            } satisfies DeleteTodoRequest);
          }
          setShowDeleteAlert(false);
          setSelectedTodoId(undefined);
        }}
        onCancel={() => {
          setShowDeleteAlert(false);
          setSelectedTodoId(undefined);
        }}
      />
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  listContentContainer: {
    marginHorizontal: 16,
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: AppColor.WHITE,
    marginBottom: 16,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: AppColor.BLACK,
    borderRadius: 8,
  },
  itemHeader: {flexDirection: "row", gap: 8, alignItems: "center"},
  itemFooter: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
  },
});

export default TodoListScreen;
