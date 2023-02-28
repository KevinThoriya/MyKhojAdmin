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

export const EditPackage = () => {
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
        <TextInput
          source="description"
          name="brief"
          resource="brief"
          validate={[required()]}
          fullWidth
        />
        <TextInput
          source="status"
          validate={[required(), number()]}
          fullWidth
        />
        <TextInput
          source="validity"
          validate={[required(), number()]}
          fullWidth
        />
        <ReferenceInput
          source="pt_id"
          reference="packageType"
          label="Package Type"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Package Type"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
