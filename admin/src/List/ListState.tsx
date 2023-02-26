import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ListState = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        {/* <TextField source="co_id" /> */}
        <ReferenceField source="co_id" reference="country" label="Country">
          <TextField source="name" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
