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

export const CreateCategory = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <SelectInput
        source="type"
        validate={[required()]}
        choices={[
          { id: "B2C", name: "B2C" },
          { id: "B2B", name: "B2B" },
          { id: "BOTH", name: "BOTH" },
        ]}
      />
    </SimpleForm>
  </Create>
);
