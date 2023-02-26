import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ListCity = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        {/* <TextField source="co_id" /> */}
        <ReferenceField source="st_id" reference="state" label="State">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="country" />
      </Datagrid>
    </List>
  );
};
