import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  Form,
  FormDataConsumer,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useAugmentedForm,
  useRecordContext,
} from "react-admin";
import { Grid, Stack } from "@mui/material";

export const CreateCity = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <CityForm props={props} />
      </SimpleForm>
    </Create>
  );
};

export const CityForm = (props: any) => {
  const {
    form: { getValues, trigger, control, watch, setValue, resetField, reset },
  } = useAugmentedForm(props);
  const StateRef = React.useRef();
  const record = useRecordContext();

  return (
    <FormDataConsumer>
      {({ formData, scopedFormData, ...rest }) => (
        <>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="stretch"
            width={"100%"}
            gap={2}
          >
            <Grid flex={1}>
              <TextInput source="name" validate={[required()]} fullWidth />
            </Grid>
            {!record && (
              <Grid flex={1}>
                <ReferenceInput
                  source="country_id"
                  reference="country"
                  label="Country"
                  validate={[required()]}
                  key={formData.country_id}
                  onChange={(e) => {
                    setValue("st_id", "");
                    reset("st_id");
                  }}
                  fullWidth
                >
                  <SelectInput
                    label="Country"
                    validate={[required()]}
                    fullWidth
                    onChange={(e) => {
                      resetField("st_id");
                      console.log(StateRef);
                    }}
                  />
                </ReferenceInput>
              </Grid>
            )}
            <Grid flex={1}>
              <ReferenceInput
                source="st_id"
                reference="state"
                label="State"
                validate={[required()]}
                key={formData.st_id}
                fullWidth
                ref={StateRef}
                filter={{
                  khoj: true,
                  url: "state/country",
                  data: { co_id: formData.country_id },
                }}
              >
                <AutocompleteInput
                  disabled={!formData.country_id}
                  key={getValues("country_id")}
                  label="State"
                  validate={[required()]}
                  fullWidth
                />
              </ReferenceInput>
            </Grid>
          </Stack>
        </>
      )}
    </FormDataConsumer>
  );
};
