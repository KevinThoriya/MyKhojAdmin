import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const CompanySubCategoryList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="com_id" reference="company" label="Company">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="sc_id" reference="subCategory" label="Sub Category">
          <TextField source="name" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
