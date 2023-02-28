import { Datagrid, List, TextField } from "react-admin";

export const PackageTypeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="type" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};
