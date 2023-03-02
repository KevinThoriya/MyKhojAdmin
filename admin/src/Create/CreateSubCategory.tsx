import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

export const CreateSubCategory = () => (
  <Create>
    <SimpleForm>
      <SubCategoryForm />
    </SimpleForm>
  </Create>
);

export const SubCategoryForm = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems="stretch"
      width={"100%"}
      gap={2}
    >
      <Grid flex={1}>
        <TextInput source="name" validate={[required()]} fullWidth />
      </Grid>
      <Grid flex={1}>
        <ReferenceInput
          source="cat_id"
          reference="category"
          label="Category"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Category"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </Grid>
    </Stack>
  );
};
