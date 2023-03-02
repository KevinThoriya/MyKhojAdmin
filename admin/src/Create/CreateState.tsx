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

export const CreateState = () => (
  <Create>
    <SimpleForm>
      <StateForm />
    </SimpleForm>
  </Create>
);

export const StateForm = () => {
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
          source="co_id"
          reference="country"
          label="Country"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Country"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </Grid>
    </Stack>
  );
};
