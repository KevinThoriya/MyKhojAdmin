import { Datagrid, List, TextField } from "react-admin";

export const CategoryList = () => {
  return (
    <List  >
      <Datagrid bulkActionButtons={false}rowClick="edit" >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};
