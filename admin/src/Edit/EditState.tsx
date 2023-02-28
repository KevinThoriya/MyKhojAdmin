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
  required,
} from "react-admin";
import { useNotify, useRedirect, useRefresh } from "react-admin";

export const EditState = () => {
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
        <TextInput source="name" validate={[required()]} fullWidth />
        <ReferenceInput
          source="co_id"
          reference="country"
          label="Country"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            fullWidth
            label="Country"
            validate={[required()]}
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
