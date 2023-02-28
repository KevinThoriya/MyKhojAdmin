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

export const CreateDesignation = () => (
  <Create>
    <SimpleForm>
      <TextInput source="des" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);
