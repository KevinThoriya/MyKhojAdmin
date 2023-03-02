import * as React from "react";

import {
  AutocompleteInput,
  Button,
  Create,
  DateInput,
  Edit,
  IconButtonWithTooltip,
  ImageField,
  ImageInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  minLength,
  required,
  useRecordContext,
} from "react-admin";

import { apiUrl } from "../dataProvider";

export const CreateAdmin = () => (
  <Create>
    <SimpleForm
      
      
    >
      <AdminForm />
    </SimpleForm>
  </Create>
);

export const AdminForm = () => {
  const record = useRecordContext();

  return (
    <>
      <TextInput
        source="username"
        validate={[required()]}
        fullWidth
        label="UserName"
      />
      <TextInput
        source="fname"
        validate={[required()]}
        fullWidth
        label="First Name"
      />
      <TextInput
        source="lname"
        validate={[required()]}
        fullWidth
        label="Last Name"
      />

      <TextInput
        source="email"
        validate={[required()]}
        fullWidth
        label="Email"
      />
      <TextInput
        source="address"
        validate={[required()]}
        fullWidth
        label="Address"
      />
      <ReferenceInput
        source="d_id"
        reference="designation"
        label="Designation"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput
          label="Designation"
          validate={[required()]}
          fullWidth
        />
      </ReferenceInput>
      <SelectInput
        source="gender"
        validate={[required()]}
        fullWidth
        choices={[
          { id: "MALE", name: "MALE" },
          { id: "FEMALE", name: "FEMALE" },
          { id: "OTHER", name: "OTHER" },
        ]}
      />
      <TextInput
        source="mobile"
        validate={[required()]}
        fullWidth
        label="Mobile"
      />
      <TextInput
        source="alternate1"
        validate={[required()]}
        fullWidth
        label="Alternative Mobile"
      />
      <DateInput
        source="dob"
        validate={[required()]}
        fullWidth
        label="Date of Birth"
      />
      {!record?.id && <PasswordInput
        source="password"
        validate={[required(), minLength(4)]}
        fullWidth
        label="Password"
      />}
    </>
  );
};
