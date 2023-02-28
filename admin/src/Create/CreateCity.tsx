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

export const CreateCity = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <ReferenceInput
        source="st_id"
        reference="state"
        label="State"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="State" validate={[required()]} fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
