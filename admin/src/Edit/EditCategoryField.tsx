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

export const EditCategoryField = () => {
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
          source="cat_id"
          reference="category"
          label="Category"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Category"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
