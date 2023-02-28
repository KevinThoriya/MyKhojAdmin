import * as React from "react";

import {
  AutocompleteInput,
  Button,
  Create,
  DateInput,
  Edit,
  IconButtonWithTooltip,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
} from "react-admin";

export const CreateCustomer = () => (
  <Create>
    <SimpleForm>
      <CustomerForm />
    </SimpleForm>
  </Create>
);

export const CustomerForm = () => {
  const record = useRecordContext();
  console.log(record);
  const [alternativeFirst, setAlternativeFirst] = React.useState(
    record?.a1_fname || record?.a1_lname || record?.a1_mobile
  );
  const [alternativeSecond, setAlternativeSecond] = React.useState(
    record?.a2_fname || record?.a2_lname || record?.a2_mobile
  );
  return (
    <>
      <TextInput
        source="fname"
        validate={[required()]}
        fullWidth
        label="First Name"
      />
      <TextInput
        source="lname"
        validate={[required()]}
        fullWidth
        label="Last Name"
      />
      <TextInput
        source="mobile"
        validate={[required()]}
        fullWidth
        label="Mobile"
      />
      <TextInput
        source="email"
        validate={[required()]}
        fullWidth
        label="Email"
      />
      {alternativeFirst ? (
        <div className="box-contact">
          <div className="box-header">Alternative Contact 1:</div>
          <TextInput
            source="a1_fname"
            name="a1f"
            fullWidth
            label="First Name"
          />
          <TextInput source="a1_lname" name="a1l" fullWidth label="Last Name" />
          <TextInput source="a1_mobile" name="a1m" fullWidth label="Mobile" />
        </div>
      ) : (
        <Button
          label="Add Alternative Contact"
          onClick={() => setAlternativeFirst(true)}
        />
      )}

      {alternativeSecond ? (
        <div className="box-contact">
          <div className="box-header">Alternative Contact 2:</div>
          <TextInput
            source="a2_fname"
            name="a2f"
            fullWidth
            label="First Name"
          />
          <TextInput source="a2_lname" name="a2l" fullWidth label="Last Name" />
          <TextInput source="a2_mobile" name="a2m" fullWidth label="Mobile" />
        </div>
      ) : (
        alternativeFirst && (
          <Button
            label="Add Alternative Contact"
            onClick={() => setAlternativeSecond(true)}
          />
        )
      )}
    </>
  );
};
