import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  number,
  required,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

export const CreatePinCode = () => (
  <Create>
    <SimpleForm>
      <PinForm />
    </SimpleForm>
  </Create>
);

export const PinForm = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems="stretch"
      width={"100%"}
      gap={2}
    >
      <Grid flex={1}>
        <TextInput
          source="code"
          name="pincode"
          resource="pincode"
          validate={[required(), number()]}
          fullWidth
        />
      </Grid>
      <Grid flex={1}>
        <ReferenceInput
          source="ci_id"
          reference="city"
          label="City"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput label="City" validate={[required()]} fullWidth />
        </ReferenceInput>
      </Grid>
    </Stack>
  );
};
