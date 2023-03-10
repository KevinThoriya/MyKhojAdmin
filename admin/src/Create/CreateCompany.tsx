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
  useInput,
  useRecordContext,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

import { apiUrl } from "../dataProvider";

export const CreateCompany = () => {
  const onSuccess = (data: any, variables: any, context: any) => {
    console.log(data, variables, context);
  };

  return (
    <Create mutationOptions={{}}>
      <SimpleForm>
        <CompanyForm />
      </SimpleForm>
    </Create>
  );
};

export const CompanyForm = () => {
  const record = useRecordContext();
  const { id, field, fieldState } = useInput({ source: "image" });

  console.log(record);
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
          source="cus_id"
          reference="customer"
          label="Customer"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Customer"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
        <ReferenceInput
          source="cat_id"
          reference="category"
          label="Category"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Category"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>

        <TextInput source="name" validate={[required()]} fullWidth />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <TimeInput source="start_time" validate={[required()]} fullWidth />
        <TimeInput source="end_time" validate={[required()]} fullWidth />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
        <TextInput source="mobile" validate={[number()]} fullWidth />
        <TextInput source="gst" validate={[]} fullWidth />
        <TextInput source="email" validate={[email()]} fullWidth />
      </Stack>
      <ImageInput
        source="image"
        label="Image"
        accept="image/*"
        onChange={(e) => {
          field.onChange(e);
        }}
      >
        {record?.image ? (
          <div>
            <img
              src={`${apiUrl}/assets/company/${record.image}`}
              title="image"
            />
          </div>
        ) : (
          <ImageField source="src" />
        )}
      </ImageInput>
    </>
  );
};
