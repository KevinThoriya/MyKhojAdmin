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

export const CreateSocial = () => (
  <Create>
    <SimpleForm>
      <SocialForm />
    </SimpleForm>
  </Create>
);

export const SocialForm = () => {
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
      <TextInput source="wa" label="WhatsApp" fullWidth />
      <TextInput source="fb" label="FaceBook" fullWidth />
      <TextInput source="ig" label="InstaGram" fullWidth />
      <TextInput source="li" label="LinkedIn" fullWidth />
      <TextInput source="twi" label="Twitter" fullWidth />
      <TextInput source="tele" label="TeleGram" fullWidth />
      <TextInput source="yt" label="YouTube" fullWidth />
    </>
  );
};
