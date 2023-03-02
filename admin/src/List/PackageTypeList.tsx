import { Datagrid, List, TextField } from "react-admin";

export const PackageTypeList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="id" />
        <TextField source="type" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};
