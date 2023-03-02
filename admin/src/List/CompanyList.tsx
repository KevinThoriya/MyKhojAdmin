import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const CompanyList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />

        <ReferenceField source="cat_id" reference="category" label="Category">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="cus_id" reference="customer" label="Customer" />
        <TextField source="mobile" />
        <TextField source="website" />
        <TextField source="gst" />
        <TextField source="start_time" />
        <TextField source="end_time" />
        <TextField source="email" />
        <DateField source="modified_at" label="Updated At" />
      </Datagrid>
    </List>
  );
};
