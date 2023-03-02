import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const CompanyLocationList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="com_id" reference="company" label="Company">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="ar_id" reference="area" label="Area">
          <TextField source="name" />
        </ReferenceField>

        <TextField source="lat" />
        <TextField source="lon" />
        <TextField source="address" />
        <TextField source="code" />
        <TextField source="city" />
        <TextField source="state" />
        <TextField source="country" />
      </Datagrid>
    </List>
  );
};
