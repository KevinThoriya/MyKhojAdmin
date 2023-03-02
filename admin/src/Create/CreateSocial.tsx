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
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <TextInput source="wa" label="WhatsApp" fullWidth />
        <TextInput source="fb" label="FaceBook" fullWidth />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <TextInput source="ig" label="InstaGram" fullWidth />

        <TextInput source="li" label="LinkedIn" fullWidth />
        <TextInput source="twi" label="Twitter" fullWidth />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <TextInput source="tele" label="TeleGram" fullWidth />
        <TextInput source="yt" label="YouTube" fullWidth />
      </Stack>
    </>
  );
};
