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

export const CreatePackage = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput
        source="description"
        name="brief"
        resource="brief"
        validate={[required()]}
        fullWidth
      />
      <TextInput source="status" validate={[required()]} fullWidth />
      <TextInput source="validity" validate={[required(), number()]} fullWidth />
      <ReferenceInput
        source="pt_id"
        reference="packageType"
        label="Package Type"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Package Type" validate={[required()]} fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
