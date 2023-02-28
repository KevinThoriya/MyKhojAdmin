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

export const CreatePinCode = () => (
  <Create>
    <SimpleForm>
      <TextInput
        source="code"
        name="pincode"
        resource="pincode"
        validate={[required(), number()]}
        fullWidth
      />
      <ReferenceInput
        source="ci_id"
        reference="city"
        label="City"
        validate={[required()]}
        fullWidth
      >
        <AutocompleteInput label="City" validate={[required()]} fullWidth />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
