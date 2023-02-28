import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const CreateSubCategory = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <ReferenceInput
        source="cat_id"
        reference="category"
        label="Category"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Category" validate={[required()]} fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
