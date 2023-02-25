import { Datagrid, List, TextField } from "react-admin";

export const DesList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="des" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};
