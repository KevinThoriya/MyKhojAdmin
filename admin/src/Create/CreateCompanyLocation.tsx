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
      <ReferenceInput
        source="com_id"
        reference="company"
        label="Company"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Company" validate={[required()]} fullWidth />
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
      <TextInput source="address" label="WhatsApp" fullWidth validate={[required()]} />
      <TextInput source="lan" label="latitude" fullWidth />
      <TextInput source="lon" label="longitude" fullWidth />
      
    </>
  );
};
