import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const SubCategoryList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="status" />
        <ReferenceField source="cat_id" reference="category" label="Parent Category">
          <TextField source="name" />
        </ReferenceField>

        
      </Datagrid>
    </List>
  );
};
