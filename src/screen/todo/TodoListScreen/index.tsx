import {useCallback, useState} from "react";

import {FlatList, ListRenderItemInfo, Text, View} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {AlertModal, Divider, Fab} from "@/component";
import {BaseScreen} from "@/core/base";
import {DeleteTodoRequest, TodoModel} from "@/model/todo";
import {useTodoNavigation} from "@/navigation/hooks";
import {useDeleteTodoMutation, useTodoListQuery} from "@/query";

import {TodoType} from "../type";

import {TodoListScreenStyle} from "./style";

const TodoListScreen = () => {
  const {isTodoListLoading, todoListData} = useTodoListQuery();
  const {isDeleteTodoLoading, callDeleteTodo} = useDeleteTodoMutation();
  const navigation = useTodoNavigation();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | undefined>(
    undefined,
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TodoModel>) => (
      <View style={TodoListScreenStyle.itemContainer}>
        <View style={TodoListScreenStyle.itemHeader}>
          <Text style={TodoListScreenStyle.title}>{item.title}</Text>
          <MaterialIcons
            name="edit"
            size={24}
            color="blue"
            onPress={() => {
              navigation.navigate("AddUpdateTodoScreen", {
                todoId: item._id,
                type: TodoType.UPDATE,
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
        <Text>{item.description}</Text>
        <Divider />
        <View style={TodoListScreenStyle.itemFooter}>
          <Text>{item.dateTime}</Text>
          <Text>{item.priority}</Text>
        </View>
      </View>
    ),
    [navigation],
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
        contentContainerStyle={TodoListScreenStyle.listContentContainer}
      />
      <Fab
        onPress={() => {
          navigation.navigate("AddUpdateTodoScreen", {
            type: TodoType.ADD,
          });
        }}
      />
      <AlertModal
        visible={showDeleteAlert}
        title="Alert"
        description="Are you sure you want to delete this todo?"
        onConfirm={() => {
          if (selectedTodoId) {
            // You can now use the selectedTodoId to call your delete function
            console.log("Deleting item with ID:", selectedTodoId);
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

export default TodoListScreen;
