import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  TextInput,
  number,
  required,
} from "react-admin";
import { useNotify, useRedirect, useRefresh } from "react-admin";

export const EditPinCode = () => {
  // const notify = useNotify();
  // const refresh = useRefresh();
  // const redirect = useRedirect();

  // // const onSuccess = () => {
  // //   notify(`Changes saved`);
  // //   redirect("/state");
  // //   refresh();
  // // };
  return (
    <Edit mutationMode="pessimistic">
      <SimpleForm>
      <TextInput source="code" validate={[required(), number()]} fullWidth options={{

      }} name="pincode" resource='pincode' />
      <ReferenceInput
        source="ci_id"
        reference="city"
        label="City"
        validate={[required()]}
      >
        <AutocompleteInput label="City" validate={[required()]} />
      </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
