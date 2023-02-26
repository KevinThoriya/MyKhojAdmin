import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ListCountry = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};
