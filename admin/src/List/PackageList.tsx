import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const PackageList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="status" />
        <TextField source="validity" />
        <ReferenceField source="pt_id" reference="package">
          <TextField source="name" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
