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

export const CreatePackage = () => (
  <Create>
    <SimpleForm>
      <PackageForm />
    </SimpleForm>
  </Create>
);

export const PackageForm = () => {
  return (
    <>
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
          <TextInput
            source="description"
            name="brief"
            resource="brief"
            validate={[required()]}
            fullWidth
          />
        </Grid>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <Grid flex={1}>
          <TextInput source="status" validate={[required()]} fullWidth />
        </Grid>
        <Grid flex={1}>
          <TextInput
            source="validity"
            validate={[required(), number()]}
            fullWidth
          />
        </Grid>
        <Grid flex={1}>
          <ReferenceInput
            source="pt_id"
            reference="packageType"
            label="Package Type"
            validate={[required()]}
            fullWidth
          >
            <AutocompleteInput
              label="Package Type"
              validate={[required()]}
              fullWidth
            />
          </ReferenceInput>
        </Grid>
      </Stack>
    </>
  );
};
