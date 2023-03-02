import { Datagrid, List, TextField } from "react-admin";

export const ComSubList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="category" />
      </Datagrid>
    </List>
  );
};
