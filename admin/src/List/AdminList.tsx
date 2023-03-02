import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const AdminList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="username" label="User Name" />
        <TextField source="fname" label="First Name" />
        <TextField source="lname" label="Last Name" />
        <TextField source="gender" label="Gender" />
        <TextField source="mobile" label="Mobile" />
        <TextField source="email" label="Email" />
        <TextField source="designation" label="Designation" />
        <TextField source="updated_by" label="Updated By" />
      </Datagrid>
    </List>
  );
};
