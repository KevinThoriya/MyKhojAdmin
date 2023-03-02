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

export const CreateCategory = () => (
  <Create>
    <SimpleForm>
      <CategoryForm />
    </SimpleForm>
  </Create>
);

export const CategoryForm = () => {
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
        <SelectInput
          source="type"
          validate={[required()]}
          choices={[
            { id: "B2C", name: "B2C" },
            { id: "B2B", name: "B2B" },
            { id: "BOTH", name: "BOTH" },
          ]}
        />
      </Grid>
    </Stack>
  );
};
