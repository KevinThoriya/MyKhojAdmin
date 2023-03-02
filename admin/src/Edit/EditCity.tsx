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

import { CityForm } from "../Create/CreateCity";

export const EditCity = () => {
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
        <CityForm />
      </SimpleForm>
    </Edit>
  );
};
