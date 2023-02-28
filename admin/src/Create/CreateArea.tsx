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

export const CreateArea = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <ReferenceInput
        source="pin_id"
        reference="pincode"
        label="Pincode"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Pincode" validate={[required()]} fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
