import {StyleSheet} from "react-native";

export const TodoListScreenStyle = StyleSheet.create({
  listContentContainer: {
    marginHorizontal: 16,
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: "white",
    marginBottom: 16,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: "black",
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
