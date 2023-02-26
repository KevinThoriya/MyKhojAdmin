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

export const CreateState = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <ReferenceInput
        source="co_id"
        reference="country"
        label="Country"
        validate={[required()]}
      >
        <AutocompleteInput label="Country" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
