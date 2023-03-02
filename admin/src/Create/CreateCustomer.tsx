import * as React from "react";

import {
  AutocompleteInput,
  Button,
  Create,
  DateInput,
  Edit,
  IconButtonWithTooltip,
  ImageField,
  ImageInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

import { apiUrl } from "../dataProvider";

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
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
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
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="stretch"
        width={"100%"}
        gap={2}
      >
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
      </Stack>

      {alternativeFirst ? (
        <div className="box-contact">
          <div className="box-header">Alternative Contact 1:</div>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="stretch"
            width={"100%"}
            gap={2}
          >
            <TextInput
              source="a1_fname"
              name="a1f"
              fullWidth
              label="First Name"
            />
            <TextInput
              source="a1_lname"
              name="a1l"
              fullWidth
              label="Last Name"
            />
            <TextInput source="a1_mobile" name="a1m" fullWidth label="Mobile" />
          </Stack>
        </div>
      ) : (
        <Button
          label="Add Alternative Contact"
          onClick={() => setAlternativeFirst(true)}
          variant="contained"
          size="medium"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
      )}

      {alternativeSecond ? (
        <div className="box-contact">
          <div className="box-header">Alternative Contact 2:</div>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="stretch"
            width={"100%"}
            gap={2}
          >
            <TextInput
              source="a2_fname"
              name="a2f"
              fullWidth
              label="First Name"
            />
            <TextInput
              source="a2_lname"
              name="a2l"
              fullWidth
              label="Last Name"
            />
            <TextInput source="a2_mobile" name="a2m" fullWidth label="Mobile" />
          </Stack>
        </div>
      ) : (
        alternativeFirst && (
          <Button
            label="Add Alternative Contact"
            onClick={() => setAlternativeSecond(true)}
            variant="contained"
            size="medium"
            style={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          />
        )
      )}

      <ImageInput source="file" label="Image" accept="image/*">
        {record?.image ? (
          <div>
            <img
              src={`${apiUrl}/assets/customer/${record.image}`}
              title="image"
            />
          </div>
        ) : (
          <ImageField source="src" />
        )}
      </ImageInput>
    </>
  );
};
