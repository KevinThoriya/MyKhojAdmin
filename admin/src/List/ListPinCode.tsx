import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ListPinCode = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="code" />
        {/* <TextField source="co_id" /> */}
        <ReferenceField source="ci_id" reference="city" label="City">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="state" />
        <TextField source="country" />
      </Datagrid>
    </List>
  );
};
