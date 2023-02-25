import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const SubCategoryList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="cat_id" />
        {/* <ReferenceField source="cat_id" reference="category">
          <TextField source="name" />
        </ReferenceField> */}
        <TextField source="name" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};
