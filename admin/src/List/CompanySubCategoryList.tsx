import { Datagrid, List, TextField } from "react-admin";

export const CompanySubCategoryList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
      </Datagrid>
    </List>
  );
};
