import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

export const CreateArea = () => (
  <Create>
    <SimpleForm>
      <AreaForm />
    </SimpleForm>
  </Create>
);

export const AreaForm = () => {
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
          source="pin_id"
          reference="pincode"
          label="Pincode"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Pincode"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </Grid>
    </Stack>
  );
};
