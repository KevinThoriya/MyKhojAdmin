import { Datagrid, List, TextField } from "react-admin";

export const ComSubList = () => {

  return (
    <List >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="com_id" />
        <TextField source="sc_id" />
      </Datagrid>
    </List>
  );
};
