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

import { PinForm } from "../Create/CreatePinCode";

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
        <PinForm />
      </SimpleForm>
    </Edit>
  );
};
