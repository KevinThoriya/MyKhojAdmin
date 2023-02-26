import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ListArea = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceField source="pin_id" reference="pincode" label="Pincode">
          <TextField source="code" />
        </ReferenceField>
        <TextField source="city" />
        <TextField source="state" />
        <TextField source="country" />
      </Datagrid>
    </List>
  );
};