import { Datagrid, List, TextField } from "react-admin";

export const CustomerList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="fname" />
        <TextField source="lname" />
        <TextField source="mobile" />
        <TextField source="a1_fname" />
        <TextField source="a1_lname" />
        <TextField source="a1_mobile" />
        <TextField source="a2_fname" />
        <TextField source="a2_lname" />
        <TextField source="a2_mobile" />
        <TextField source="email" />
      </Datagrid>
    </List>
  );
};
