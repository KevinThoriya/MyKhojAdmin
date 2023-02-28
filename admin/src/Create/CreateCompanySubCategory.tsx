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

export const CreateCompanySubCategory = () => (
  <Create>
    <SimpleForm>
    <ReferenceInput
        source="com_id"
        reference="company"
        label="Company"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Company" validate={[required()]} fullWidth />
      </ReferenceInput>
      <ReferenceInput
        source="sc_id"
        reference="subCategory"
        label="Sub Category"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="Sub Category" validate={[required()]} fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
