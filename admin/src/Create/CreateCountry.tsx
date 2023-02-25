import * as React from "react";

import {
  Create,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const CreateCountry = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);
