import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const CompanyList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />

        <ReferenceField source="cat_id" reference="category" label="Category">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="cas_id" reference="customer" label="Customer" />
        <TextField source="email" />
      </Datagrid>
    </List>
  );
};
