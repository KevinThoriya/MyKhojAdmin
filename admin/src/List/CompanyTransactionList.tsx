import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const CompanyTransactionList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="company" label="Company" />
        <TextField source="package" label="Package" />
        <TextField source="code" label="Code" />
        <TextField source="package_type" label="Package Type" />
      </Datagrid>
    </List>
  );
};
