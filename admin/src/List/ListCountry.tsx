import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ListCountry = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};
