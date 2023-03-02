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

export const CreateCompanySubCategory = () => (
  <Create>
    <SimpleForm>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <ReferenceInput
          source="com_id"
          reference="company"
          label="Company"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Company"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
        <ReferenceInput
          source="sc_id"
          reference="subCategory"
          label="Sub Category"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Sub Category"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </Stack>
    </SimpleForm>
  </Create>
);
