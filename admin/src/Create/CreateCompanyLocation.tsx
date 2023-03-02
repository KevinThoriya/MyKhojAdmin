import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  EmailField,
  ImageField,
  ImageInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  TimeInput,
  email,
  number,
  required,
  useRecordContext,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

import { apiUrl } from "../dataProvider";

export const CreateCompanyLocation = () => (
  <Create>
    <SimpleForm>
      <CompanyLocationForm />
    </SimpleForm>
  </Create>
);

export const CompanyLocationForm = () => {
  const record = useRecordContext();

  return (
    <>
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
          source="ar_id"
          reference="area"
          label="Area"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput label="Area" validate={[required()]} fullWidth />
        </ReferenceInput>
      </Stack>

      <TextInput
        multiline
        rows={2}
        source="address"
        label="Address"
        fullWidth
        validate={[required()]}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <TextInput source="lan" label="latitude" fullWidth />
        <TextInput source="lon" label="longitude" fullWidth />
      </Stack>
    </>
  );
};
