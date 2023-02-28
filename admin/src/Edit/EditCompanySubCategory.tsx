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

export const EditCompanySubCategory = () => {
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
        <ReferenceInput
          source="com_id"
          reference="company"
          label="Company"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Company"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
        <ReferenceInput
          source="sc_id"
          reference="subCategory"
          label="Sub Category"
          validate={[required()]}
          fullWidth
        >
          <AutocompleteInput
            label="Sub Category"
            validate={[required()]}
            fullWidth
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
