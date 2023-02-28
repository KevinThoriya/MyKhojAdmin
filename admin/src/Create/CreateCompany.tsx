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

export const CreateCompany = () => (
  <Create>
    <SimpleForm>
      <CompanyForm />
    </SimpleForm>
  </Create>
);

export const CompanyForm = () => {
  const record = useRecordContext();
  console.log(record);
  return (
    <>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TimeInput source="start_time" validate={[required()]} fullWidth />
      <TimeInput source="end_time" validate={[required()]} fullWidth />
      <ReferenceInput
        source="cat_id"
        reference="category"
        label="Category"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Category" validate={[required()]} fullWidth />
      </ReferenceInput>
      <ReferenceInput
        source="cas_id"
        reference="customer"
        label="Customer"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Customer" validate={[required()]} fullWidth />
      </ReferenceInput>
      <TextInput source="mobile" validate={[number()]} fullWidth />
      <TextInput source="gst" validate={[]} fullWidth />
      <TextInput source="email" validate={[email()]} fullWidth />
      <ImageInput source="image" label="Image" accept="image/*">
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
